import {typeNewRm} from './TypesSqlite'

export {};

declare global {
  interface Window {
    electron: ElectronAPI;
    api: {
      getUF: () => Promise<string[]>,
      getCidades: (uf:string) => Promise<any>,
      getEndereco: (cep:string) => Promise<any>,
      uploadFile: (file: CustomFile) => Promise<any>,
      sendPrintRequest: () => Promise<any>,
      getHistoricoCadastro: () => Promise<any>,
      getAluno: (id: strin)=> Promise<any>,
      updateAluno: (id: string, data: Aluno)=> Promise<any>,
      insertAluno: (doc: Aluno, key: string)=>Promise<PouchDB.Core.Response | void>,
      insertFromListAlunos: () => Promise<any>,
      selectAll: (table: string) => Promise<any>,
      newRm: () => Promise<typeNewRm[]>
    };
    customApi: {
      sendPrintRequest: () => void;
    };
  }
}

export  interface CustomFile {
  path: string;
  name: string;
}
