const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'clientes');
const outDir = path.join(__dirname, '..', 'public', 'clientes', 'processed');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Extract Valentt from SVG if needed
const svgPath = path.join(dir, 'logo_valentt_26.svg');
if (fs.existsSync(svgPath)) {
  const content = fs.readFileSync(svgPath, 'utf8');
  const m = content.match(/xlink:href=["']data:img\/png;base64,([^"']+)["']/);
  if (m) {
    fs.writeFileSync(path.join(dir, 'valentt-raw.png'), Buffer.from(m[1], 'base64'));
    console.log('Extracted valentt-raw.png');
  }
}

console.log('Script initialized.');
