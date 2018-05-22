const fs = require('fs');
const path = require('path');

const resolveFilePath = (dir, fileName) => {
  if (!fileName) {
    throw new Error('Please, provide a file name!');
  }
  const filePath = path.resolve(__dirname, `../${fileName}`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not exist: ${filePath}`);
  }

  return filePath;
};

const resolveFolderPath = (dir, relativeFolderPath) => {
  if (!relativeFolderPath) {
    throw new Error('Please, provide a folder path!');
  }
  const folderPath = path.resolve(__dirname, `../${relativeFolderPath}`);

  if (!fs.existsSync(folderPath)) {
    throw new Error(`Folder not exist: ${folderPath}`);
  }

  return folderPath;
};

const replaceExt = (npath, ext) => {
  if (typeof npath !== 'string') {
    return npath;
  }

  if (npath.length === 0) {
    return npath;
  }

  var nFileName = path.basename(npath, path.extname(npath)) + ext;
  return path.join(path.dirname(npath), nFileName);
}

module.exports = {
  resolveFilePath,
  resolveFolderPath,
  replaceExt
}
