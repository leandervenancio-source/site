const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'clientes');
const outDir = path.join(__dirname, '..', 'public', 'clientes');

// 1. Extract Valentt from SVG
const svgPath = path.join(dir, 'logo_valentt_26.svg');
if (fs.existsSync(svgPath)) {
  const content = fs.readFileSync(svgPath, 'utf8');
  const m = content.match(/xlink:href=["']data:img\/png;base64,([^"']+)["']/);
  if (m) {
    fs.writeFileSync(path.join(dir, 'valentt-raw.png'), Buffer.from(m[1], 'base64'));
    console.log('Extracted valentt-raw.png');
  }
}

// Function to remove white/near-white or specific background color
async function makeTransparent(inputPath, outputPath, options = {}) {
  const image = sharp(inputPath);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  
  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  
  // options.targetColor = [r, g, b]
  // options.tolerance = number (e.g. 30)
  // options.isNearWhite = boolean (threshold > 230)
  
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    let isBg = false;
    if (options.isNearWhite) {
      if (r > 230 && g > 230 && b > 230) {
        isBg = true;
      }
    } else if (options.targetColor) {
      const [tr, tg, tb] = options.targetColor;
      const tol = options.tolerance || 30;
      if (Math.abs(r - tr) < tol && Math.abs(g - tg) < tol && Math.abs(b - tb) < tol) {
        isBg = true;
      }
    }
    
    if (isBg) {
      data[i + 3] = 0; // set alpha to 0 (transparent)
    }
  }
  
  // Trim empty transparent edges and save as png with clean height
  await sharp(data, { raw: { width, height, channels } })
    .trim()
    .png()
    .toFile(outputPath);
    
  console.log('Saved:', outputPath);
}

async function run() {
  // 1. Mafit - already transparent, just trim
  await sharp(path.join(dir, 'logo_cliente_34835229000168.png'))
    .trim()
    .png()
    .toFile(path.join(outDir, 'logo-mafit.png'));
  console.log('Processed Mafit');

  // 2. Valentt
  if (fs.existsSync(path.join(dir, 'valentt-raw.png'))) {
    await makeTransparent(path.join(dir, 'valentt-raw.png'), path.join(outDir, 'logo-valentt.png'), { isNearWhite: true });
  }

  // 3. Ativo 11
  await sharp(path.join(dir, 'Ativo 11.png'))
    .trim()
    .png()
    .toFile(path.join(outDir, 'logo-ativo11.png'));
  console.log('Processed Ativo 11');

  // 4. Inove Gôndolas: images (5).jpg (near white / off-white bg)
  await makeTransparent(path.join(dir, 'images (5).jpg'), path.join(outDir, 'logo-inove.png'), { isNearWhite: true });

  // 5. Evolução Informática: images (1).png (white bg)
  await makeTransparent(path.join(dir, 'images (1).png'), path.join(outDir, 'logo-evolucao.png'), { isNearWhite: true });

  // 6. Paredão Tintas: images (4).jpg (white bg)
  await makeTransparent(path.join(dir, 'images (4).jpg'), path.join(outDir, 'logo-paredao.png'), { isNearWhite: true });

  // 7. Multlens: images (3).jpg
  // Multlens has light teal background [203, 253, 218] or near white
  await makeTransparent(path.join(dir, 'images (3).jpg'), path.join(outDir, 'logo-multlens.png'), {
    targetColor: [203, 253, 218],
    tolerance: 45
  });

  // 8. M logo: images.png (yellow bg [255, 202, 0])
  await makeTransparent(path.join(dir, 'images.png'), path.join(outDir, 'logo-m.png'), {
    targetColor: [255, 202, 0],
    tolerance: 40
  });

  console.log('All logos processed successfully!');
}

run().catch(console.error);
