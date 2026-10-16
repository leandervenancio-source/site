const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const dir = path.join(__dirname, '..', 'public', 'clientes');

async function fixInove() {
  console.log('Processing Inove...');
  const input = path.join(dir, 'images (5).jpg');
  
  // Crop logo area (exclude bottom blue bar at y=442)
  const region = await sharp(input)
    .extract({ left: 10, top: 130, width: 425, height: 180 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = region;
  const { width, height, channels } = info;

  // Background removal: near-white
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    
    // Check if pixel is background (near white / very light gray)
    if (r > 230 && g > 230 && b > 230) {
      data[i + 3] = 0;
    } else if (r > 205 && g > 205 && b > 205) {
      // Soft edge anti-aliasing
      const minVal = Math.min(r, g, b);
      const alpha = Math.round(((230 - minVal) / 25) * 255);
      data[i + 3] = Math.max(0, Math.min(255, alpha));
    }
  }

  const outPath = path.join(dir, 'logo-inove.png');
  await sharp(data, { raw: { width, height, channels } })
    .trim()
    .png()
    .toFile(outPath);

  const meta = await sharp(outPath).metadata();
  console.log('Saved logo-inove.png:', meta.width, 'x', meta.height);
}

async function fixMultlens() {
  console.log('Processing Multlens...');
  const input = path.join(dir, 'images (3).jpg');
  
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Compute column background color from top rows (y=0..4)
  const bgCol = [];
  for (let x = 0; x < width; x++) {
    let r = 0, g = 0, b = 0;
    for (let y = 0; y < 6; y++) {
      const idx = (y * width + x) * channels;
      r += data[idx];
      g += data[idx + 1];
      b += data[idx + 2];
    }
    bgCol.push([r / 6, g / 6, b / 6]);
  }

  const out = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * channels;
      const dstIdx = (y * width + x) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];
      const [br, bg, bb] = bgCol[x];

      const diff = Math.sqrt((r - br) ** 2 + (g - bg) ** 2 + (b - bb) ** 2);

      if (diff <= 20) {
        // Complete background
        out[dstIdx] = 0;
        out[dstIdx + 1] = 0;
        out[dstIdx + 2] = 0;
        out[dstIdx + 3] = 0;
      } else if (diff >= 36) {
        // Solid foreground (MULT green, LENS orange, and swirl teal)
        out[dstIdx] = r;
        out[dstIdx + 1] = g;
        out[dstIdx + 2] = b;
        out[dstIdx + 3] = 255;
      } else {
        // Anti-aliased transition
        const alpha = Math.round(((diff - 20) / 16) * 255);
        out[dstIdx] = r;
        out[dstIdx + 1] = g;
        out[dstIdx + 2] = b;
        out[dstIdx + 3] = Math.max(0, Math.min(255, alpha));
      }
    }
  }

  const outPath = path.join(dir, 'logo-multlens.png');
  await sharp(out, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toFile(outPath);

  const meta = await sharp(outPath).metadata();
  console.log('Saved logo-multlens.png:', meta.width, 'x', meta.height);
}

async function main() {
  await fixInove();
  await fixMultlens();
  console.log('Done fixing logos!');
}

main().catch(console.error);
