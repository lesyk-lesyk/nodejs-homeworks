const program = require('commander');
const resolveFilePath = require('./lib/path-resolver');

program
  .version('0.1.0')
  .option('-a, --action [value]', 'Provide necessary action name')
  .option('-f, --file [value]', 'File name')
  .parse(process.argv);

try {
  switch (program.action) {
    case 'reverse':
      require('./lib/reverse')(process.stdin, process.stdout);
      break;
    case 'transform':
      require('./lib/transform')(process.stdin, process.stdout);
      break;
    case 'outputFile':
      const filePath = resolveFilePath(__dirname, program.file);
      require('./lib/output-file')(filePath, process.stdout);
      break;
    case 'convertFromFile':
      break;
    case 'convertToFile':
      break;
    case 'cssBundler':
      break;
    default:
      console.error('Wrong input parameters!')
      program.help();
      break;
  }
} catch (error) {
  console.error('Something went wrong!')
  console.error(`Error: ${error.message || error}`);
}
