const fs = require('fs');
const path = require('path');

module.exports = (fileName, stdOut) => {
  fs.createReadStream(
    path.resolve(__dirname, `../${fileName}`)
  ).pipe(stdOut);
}
