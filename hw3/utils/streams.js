const program = require('commander');

program
  .version('0.1.0')
  .option('-a, --action [value]', 'Provide necessary action name')
  .option('-f, --file [value]', 'File name')
  .parse(process.argv);

switch (program.action) {
  case 'reverse':
    require('./lib/reverse')(process.stdin, process.stdout);
    break;
  case 'transform':
    require('./lib/transform')(process.stdin, process.stdout);
    break;
  case 'outputFile':
    require('./lib/output-file')(program.file, process.stdout);
    break;
  case 'convertFromFile':
    break;
  case 'convertToFile':
    break;
  case 'cssBundler':
    break;
  default:
    console.error('Error: Provided action name is unknown or empty')
}
