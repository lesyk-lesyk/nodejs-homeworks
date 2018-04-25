import fs from 'fs';
import CsvJson from 'csvjson';

export class Importer {
  constructor() {
    this.options = { encoding: 'utf8' };
  }

  importSync(path) {
    const data = fs.readFileSync(path, this.options);
    return CsvJson.toObject(data);
  }

  import(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, this.options, (err, data) => {
        if (err) reject(err);
        const jsonData = CsvJson.toObject(data);
        resolve(jsonData);
      });
    });
  }
}
