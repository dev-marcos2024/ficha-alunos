import { app} from 'electron'
import sqlite3 from 'sqlite3'
import path from 'node:path'
import {TabelaRm} from '~/src/types/TypeSqlite'

let dbDir = ''
try {
  dbDir = path.join(app.getPath('downloads'), '..','OneDrive - Prefeitura Municipal de Itupeva', 'Aplicacao', 'BD_laerte.db' );
} catch (error) {
  dbDir = path.join(app.getPath('documents'), 'BD_laerte.db' );
}


// Conectando ao banco de dados SQLite
const db = new sqlite3.Database(dbDir, (err) => {
    if (err) {
      return console.error('Erro ao conectar ao banco de dados:', err.message);
    }
    console.log('Conectado ao banco de dados SQLite.');
  });

// SELECIONANDO TODAS A TABELA
export function selectAll(table: string): Promise<TabelaRm[]> {
    return new Promise((resolve, reject)=> {
      db.all(`SELECT * FROM ${table}`, [], (err, rows: TabelaRm[]) => {
        if (err) {
          console.error('Erro ao executar consulta:', err.message);
          reject(err.message);
        } else {
          resolve(rows);
        }
      });
    });
}

// CRIANDO NOVO RM
export function selectNewRm(){
  return new Promise((resolve, reject)=> {
    db.all(`SELECT * FROM NewRm`,(err, rows) => {
      if (err) {
        console.error('Erro ao executar consulta:', err.message);
        reject(err.message);
      } else {
        resolve(rows);
      }
    });
  });
}