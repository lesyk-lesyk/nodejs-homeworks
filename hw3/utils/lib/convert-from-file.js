const fs = require('fs');
const through = require('through2');
const csvJson = require('csvjson');

module.exports = (filePath, stdOut) => {
  const parseCsv = function (buffer, encoding, next) {
    const parsedCsv = csvJson.toObject(buffer.toString());
    this.push(JSON.stringify(parsedCsv));
    next();
  }

  fs.createReadStream(filePath)
    .pipe(through(parseCsv))
    .pipe(stdOut);
}
