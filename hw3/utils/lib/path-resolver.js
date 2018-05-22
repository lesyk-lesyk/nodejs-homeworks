const fs = require('fs');
const path = require('path');

module.exports = (dir, fileName) => {
  if (!fileName) {
    throw new Error('Please, provide a file name!');
  }
  const filePath = path.resolve(__dirname, `../${fileName}`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not exist: ${filePath}`);
  }

  return filePath;
}
