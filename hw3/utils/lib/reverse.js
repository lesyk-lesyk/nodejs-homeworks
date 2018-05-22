const through = require('through2');

module.exports = (stdIn, stdOut) => {
  const transform = function (buffer, encoding, next) {
    const input = buffer.toString();

    const strArray = input.split('');
    strArray.unshift(strArray.pop())
    const output = strArray.reverse().join('');

    this.push(output);
    next();
  };

  stdIn.pipe(through(transform)).pipe(stdOut);
}
