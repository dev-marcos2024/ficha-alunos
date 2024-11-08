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
    };
    customApi: {
      sendPrintRequest: () => void;
    };
  }
}

interface CustomFile {
  path: string;
  name: string;
}
