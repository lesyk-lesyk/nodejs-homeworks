const through = require('through2');

module.exports = (stdin, stdout) => {
  const transform = function (buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
  }

  stdin.pipe(through(transform)).pipe(stdout);
}
