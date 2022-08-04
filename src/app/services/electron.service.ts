import { Injectable } from '@angular/core';
import * as electrons from 'electron'
declare function getIpcRenderer(): any;

@Injectable({
  providedIn: 'root'
})
export class ElectronService {

  ipcRenderer: Electron.IpcRenderer;
  constructor() {
    this.ipcRenderer = getIpcRenderer();
  }

  quit(){
    this.ipcRenderer.send('quit', '');
  }
}
