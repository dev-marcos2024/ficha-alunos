import { app, ipcMain } from 'electron'
import PouchDB from 'pouchdb'
import path from 'node:path'
import fs from 'node:fs'
import {TableAluno, Aluno} from '../../types/TypeCadastro';
import {randomUUID} from 'node:crypto'
import {listDataAlunos} from './utils/extrairPdf'

// Diretorio da base de dados Histórico de matricula.
const dbDir = path.join(app.getPath('userData'), 'databases');

// Criando diretório caso nao exista.
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Iniciando o banco de dados
const db = new PouchDB<TableAluno>(dbDir)

// COMUNICACAO entre main e renderer
ipcMain.handle('insertFromListAlunos', async ()=>{
    const data  = await listDataAlunos();

    if (data.length !== 0){
      const result = data.map(item => handleInsert(item as Aluno))
      return result[0]
    }else{
      return 'NAO EXISTE ALUNOS NO DIRETORIO PARA INSERIR'
    }
});


ipcMain.handle('insertAluno', async (event, doc: Aluno) => {
  const result = handleInsert(doc);
  return result;
})

ipcMain.handle("getAluno", async () => {
  try {
    const result = db.allDocs({include_docs: true})
    return (await result).rows[0].doc
  } catch (error) {
    console.log('ERRO AO BUSCAR', Error )
    return []
  }
})

ipcMain.handle('updateAluno', async () =>{

})

// funcoes CRUD
const handleInsert  = async (doc: Aluno):Promise<PouchDB.Core.Response | void>=>{
  const id = randomUUID();
  const data = {...doc, _id: id};
  return db.put(data).then(response => response).catch(err => console.log('ERRO AO CADASTRAR', err));
}