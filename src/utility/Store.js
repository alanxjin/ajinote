/*
 *  Reference from 
 *  https://medium.com/cameron-nokes/how-to-store-user-data-in-electron-3ba6bf66bc1e
 *
 */

import path from 'path';
const electron = window.require('electron');
const fs = electron.remote.require('fs');


class Store {
  constructor(opts) {
    const userDataPath = (electron.app || electron.remote.app).getPath('userData');
    this.path = path.join(userDataPath, opts.name + '.json');
    this.data = parseDataFile(this.path, opts.defaults);
  }
  
  get(key) {
    return this.data[key];
  }
  
  set(key, val) {
    this.data[key] = val;
    fs.writeFileSync(this.path, JSON.stringify(this.data));
  }
}

function parseDataFile(filePath, defaults) {
  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch(error) {
    return defaults;
  }
}
export default Store;