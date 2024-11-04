import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  getUF: ()=>{
    return  ipcRenderer.invoke('getUF')
  },

  getCidades: (uf:string) => {
    return ipcRenderer.invoke('getCidades', uf);
  },
  getEndereco: (cep:string)=>{
    return  ipcRenderer.invoke('getEndereco', cep)
  },
}





if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);

    // Expondo a função de impressão
    contextBridge.exposeInMainWorld('customApi', {
      sendPrintRequest: () => ipcRenderer.send('print-request'),
    });
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api

  // Expondo a função de impressão
  // @ts-ignore
  window.customApi = {
    sendPrintRequest: () => ipcRenderer.send('print-request'),
  };
}


