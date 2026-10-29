import sharp from 'sharp';
await sharp('public/research-social.svg').png().toFile('public/research-social.png');
console.log('Generated public/research-social.png (1200 × 630)');
