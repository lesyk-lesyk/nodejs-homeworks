import path from 'path';
import DirWatcher from './dirwatcher'

const Dirwatcher = new DirWatcher();
Dirwatcher.watch(path.join(__dirname, 'data'), 200);
