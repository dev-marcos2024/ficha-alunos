export {};

declare global {
  interface Window {
    electron: ElectronAPI;
    api: {
      getUF: () => Promise<any>,
      getCidades: (uf:string) => Promise<any>,
      getEndereco: (cep:string) => Promise<any>,
    };
    customApi: {
      sendPrintRequest: () => void;
    };
  }
}
