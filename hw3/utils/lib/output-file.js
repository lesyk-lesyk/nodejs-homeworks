const fs = require('fs');
const path = require('path');

module.exports = (filePath, stdOut) => {
  fs.createReadStream(filePath).pipe(stdOut);
}
