import fs from 'fs';
import path from 'path';

export default class DirWatcher {
  constructor() {
    this.intervalId = null;
    this.fileList = {};
    this.updatedFiles = new Set();
  }

  watch(dirPath, delay = 1000) {
    setInterval(() => {

      fs.readdir(dirPath, (err, files) => {
        if (err) throw err;

        files.forEach(fileName => {
          fs.stat(path.join(dirPath, fileName), (err, stats) => {
            if (err) throw err;

            if (this.fileList.hasOwnProperty(fileName)) {
              if (this.fileList[fileName] < stats.mtimeMs) {
                this.updatedFiles.add(fileName);
                this.fileList[fileName] = stats.mtimeMs;
              }
            } else {
              this.updatedFiles.add(fileName);
              this.fileList[fileName] = stats.mtimeMs;
            }
          });
        });

        if (this.updatedFiles.size > 0) {
          console.log(this.updatedFiles);
          this.updatedFiles.clear();
        }
      });
    }, delay)
  }

  stopWatcher() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.fileList = [];
    } else {
      console.log('No running watcher!');
    }
  }
}
