
import { ApiType } from "../preload";
import { TypeRm } from "./TypesSqlite";

export {};

declare global {
  interface Window {
    electron: ElectronAPI;
    api: ApiType;
    customApi: {
      sendPrintRequest: () => void;
    };
  }
}

export  interface CustomFile {
  path: string;
  name: string;
}
