export {};

declare global {
  interface Window {
    electron: ElectronAPI;
    api: {
      getUF: () => Promise<string[]>,
      getCidades: (uf:string) => Promise<any>,
      getEndereco: (cep:string) => Promise<any>,
    };
    customApi: {
      sendPrintRequest: () => void;
    };
  }
}
