const fs = require('fs');
const path = require('path');

module.exports = (folderPath) => {
  const files = fs.readdirSync(folderPath);
  const outputFilePath = path.resolve(folderPath, `bundle.css`);
  const outStream = fs.createWriteStream(outputFilePath);

  files.forEach(file => {
    const filePath = path.resolve(folderPath, file);
    fs.createReadStream(filePath).pipe(outStream);
  });

  const extraContent = path.resolve(__dirname, './css-data/nodejs18-hw3-css.css');
  fs.createReadStream(extraContent).pipe(outStream);

  console.info(`Done! Styles saved to: \n${outputFilePath}`);
}
