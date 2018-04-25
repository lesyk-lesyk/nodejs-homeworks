import fs from 'fs';
import path from 'path';
import EventEmitter from 'events';

export class DirWatcher extends EventEmitter {
  constructor() {
    super(...arguments);
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
          this.updatedFiles.forEach(fileName => {
            this.emit('changed', path.join(dirPath, fileName));
          })
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
