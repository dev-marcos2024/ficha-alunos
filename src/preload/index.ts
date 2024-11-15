import { contextBridge, ipcRenderer } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';
import { Aluno} from '../types/TypeCadastro';
import {TabelaRm} from '~/src/types/TypeSqlite'
import { TypeRm, TypeNewCadastro } from '../types/TypesSqlite';
import { TypeForm } from '@renderer/src/models/SchemaForm'

const api = {
  getUF: (): Promise<string[]> => ipcRenderer.invoke('getUF'),
  getCidades: (uf: string):Promise<any> => ipcRenderer.invoke('getCidades', uf),
  getEndereco: (cep: string):Promise<any> => ipcRenderer.invoke('getEndereco', cep),
  uploadFile: (file: any): Promise<any> => ipcRenderer.invoke('uploadFile', file), 
  sendPrintRequest: () => ipcRenderer.send('sendPrintRequest'), 
  getAluno: (id: string): Promise<any>=> ipcRenderer.invoke('getAluno', id),
  updateAluno: (id: string, data: Aluno): Promise<any>=> ipcRenderer.invoke('updateAluno', id, data),
  insertAluno: (doc:TypeForm |Aluno, key: string):Promise<PouchDB.Core.Response | void> => ipcRenderer.invoke('insertAluno', doc, key),
  insertFromListAlunos: ():Promise<any> => ipcRenderer.invoke('insertFromListAlunos'),
  selectAll: (table: string): Promise<TabelaRm[]> => ipcRenderer.invoke('selectAll', table),
  getNewRm: (): Promise<number> => ipcRenderer.invoke('getNewRm'),
  selectByRa: (ra: string): Promise<TypeRm[]> => ipcRenderer.invoke('selectByRa', ra),
  criarNovoRm: (obj: TypeNewCadastro): Promise<string> => ipcRenderer.invoke('criarNovoRm', obj),

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


export type ApiType = typeof api