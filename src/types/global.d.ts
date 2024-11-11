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
      getAluno: ()=> Promise<any>,
      updateAluno: ()=> Promise<any>,
      insertAluno: (doc: Aluno)=>Promise<PouchDB.Core.Response | void>,
      insertFromListAlunos: () => Promise<any>
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
