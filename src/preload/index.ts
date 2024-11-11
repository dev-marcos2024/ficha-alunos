import { contextBridge, ipcRenderer } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';
import {TableAluno, Aluno} from '../types/TypeCadastro';

const api = {
  getUF: () => ipcRenderer.invoke('getUF'),
  getCidades: (uf: string) => ipcRenderer.invoke('getCidades', uf),
  getEndereco: (cep: string) => ipcRenderer.invoke('getEndereco', cep),
  uploadFile: (file: any) => ipcRenderer.invoke('uploadFile', file), // Função de upload
  sendPrintRequest: () => ipcRenderer.send('sendPrintRequest'), // Função de impressão
  getAluno: ()=> ipcRenderer.invoke('getAluno'),
  updateAluno: ()=> ipcRenderer.invoke('updateAluno'),
  insertAluno: (doc: Aluno):Promise<PouchDB.Core.Response | void>=> ipcRenderer.invoke('insertAluno', doc),
  insertFromListAlunos: () => ipcRenderer.invoke('insertFromListAlunos')
};

if (process.contextIsolated) {
  try {
    // Expondo as APIs no contexto isolado
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error('Error exposing API:', error);
  }
} else {
  // Para quando o contexto não está isolado (mais comum em versões anteriores do Electron)
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
