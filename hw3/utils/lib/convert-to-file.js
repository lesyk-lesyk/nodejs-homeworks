const fs = require('fs');
const path = require('path');
const through = require('through2');
const csvJson = require('csvjson');
const pUtils = require('./path-utils');

module.exports = (filePath) => {
  const parseCsv = function (buffer, encoding, next) {
    const parsedCsv = csvJson.toObject(buffer.toString());
    this.push(JSON.stringify(parsedCsv));
    next();
  }

  const outputFilePath = pUtils.replaceExt(filePath, '.json');
  fs.createReadStream(filePath)
    .pipe(through(parseCsv))
    .pipe(fs.createWriteStream(outputFilePath));

  console.info(`Done! Data saved to: \n${outputFilePath}`);
}
