const program = require('commander');
const pUtils = require('./lib/path-utils');

program
  .version('0.1.0')
  .option('-a, --action [value]', 'Provide necessary action name')
  .option('-f, --file [value]', 'File name')
  .option('-p, --path [value]', 'Folder path')
  .parse(process.argv);

try {
  let filePath;
  switch (program.action) {
    case 'reverse':
      require('./lib/reverse')(process.stdin, process.stdout);
      break;
    case 'transform':
      require('./lib/transform')(process.stdin, process.stdout);
      break;
    case 'outputFile':
      filePath = pUtils.resolveFilePath(__dirname, program.file);
      require('./lib/output-file')(filePath, process.stdout);
      break;
    case 'convertFromFile':
      filePath = pUtils.resolveFilePath(__dirname, program.file);
      require('./lib/convert-from-file')(filePath, process.stdout);
      break;
    case 'convertToFile':
      filePath = pUtils.resolveFilePath(__dirname, program.file);
      require('./lib/convert-to-file')(filePath);
      break;
    case 'cssBundler':
      const folderPath = pUtils.resolveFolderPath(__dirname, program.path);
      require('./lib/css-bundler')(folderPath);
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
