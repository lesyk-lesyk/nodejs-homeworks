import path from 'path';
import { DirWatcher } from './dirwatcher'
import { Importer } from './importer';

const dirwatcher = new DirWatcher();
const importer = new Importer();

dirwatcher.watch(path.join(__dirname, 'data'), 200);

dirwatcher.on('changed', (filePath) => {
  const result = importer.importSync(filePath);
  console.log('importSync \n', result);
});

dirwatcher.on('changed', (filePath) => {
  importer.import(filePath)
    .then(result => {
      console.log('import \n', result);
    })
    .catch(err => {
      console.log(`Error: ${err}`);
    });
});
