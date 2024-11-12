import { app, ipcMain } from 'electron'
import PouchDB from 'pouchdb'
import path from 'node:path'
import fs from 'node:fs'
import {TableAluno, Aluno} from '~/src/types/TypeCadastro';
import {listDataAlunos} from './utils/extrairPdf'
import {TypeForm} from '~/src/renderer/src/models/SchemaForm'

// Diretorio da base de dados Histórico de matricula.
const dbDir = path.join(app.getPath('userData'), 'databases');

// Criando diretório caso nao exista.
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Iniciando o banco de dados
const db = new PouchDB<TableAluno | TypeForm>(dbDir)

//===========> COMUNICACAO MAIN E RENDERER <=====================================================

// Inserir alunos da pasta aqruivos baixadoS do SED
ipcMain.handle('insertFromListAlunos', async ()=>{
    const data  = await listDataAlunos();
    if (data.length !== 0){
      data.map((item: Aluno) => handleInsert(item, item.RA))
      return 'ALUNOS INSERIDOS COM EXITO'
    }else{
      return 'NAO EXISTE ALUNOS NO DIRETORIO PARA INSERIR'
    }
});

// Inseri Alunos no formulario.
ipcMain.handle('insertAluno', async (event, doc: Aluno, key: string) => {
  try {
    const result = handleInsert(doc, key);
    return `DOCULMENTO INSERIDO COM SUCESSO ${result}`;
  } catch (error) {
    return `FALHA AO INSERIR O DOCULMENTO ${Error}`;
  }
  
})

// Seleciona um aluno
ipcMain.handle("getAluno", async (event, id) => {
  try {
    return await db.get(id);
  } catch (err) {
    if(err instanceof Error && 'status' in err && err.status === 404){
      return false;
    }else{
      return false
    }
  }
});


// Atualiza um aluno
ipcMain.handle('updateAluno', async (event, id: string, data: Aluno) =>{
  db.get(id).then(doc => {
    doc = {...doc, ...data};
    return db.put(doc);
  })
  .then(response => {
    return `Documento atualizado com sucesso: ${response}`;
  })
  .catch(err => {
    return `Erro ao atualizar documento: ${err}`;
  });
})

//====================> FUNCOES CRUD <=====================================================================
const handleInsert  = async (doc: Aluno, key: string):Promise<PouchDB.Core.Response | void>=>{
  const data = {...doc, _id: key};
  return db.put(data).then(response => response).catch(err => console.log('ERRO AO CADASTRAR', err));
}

const handleAllDocs = async () => {
  try {
    const result = await db.allDocs({ include_docs: true });
    // O array de documentos estará em result.rows
    return result.rows.map(row => row.doc);
  } catch (error) {
    return `Erro ao buscar documentos: ${error}`;
  }
}


