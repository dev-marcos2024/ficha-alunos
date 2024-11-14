import { TypeNewRm, TypeRm, TypeNewCadastro } from '~/src/types/TypesSqlite';
import {db} from './conectDatabase'
import {TabelaRm} from '~/src/types/TypeSqlite'

// SELECIONANDO TODAS A TABELA
export function selectAll(table: string): Promise<TabelaRm[]> {
    return new Promise((resolve, reject)=> {
      db && db.all(`SELECT * FROM ${table}`, [], (err, rows: TabelaRm[]) => {
        if (err) {
          console.error('Erro ao executar consulta:', err.message);
          reject(err.message);
        } else {
          resolve(rows);
        }
      });
    });
}

// SELECIONANDO NOVO RM
export function getNewRm(): Promise<number> {
  return new Promise((resolve, reject) => {
    if (!db) return reject("Database connection is not available");

    db.all(`SELECT * FROM NewRm`, (err, rows:TypeNewRm[]) => {
      if (err) {
        console.error("Erro ao executar consulta:", err.message);
        reject(err.message);
      } else {
        resolve(rows[0].newRm);
      }
    });
  });
}

// SELECIONA UM REGISTRO DA TABELA RM
export function getByRa(ra: string): Promise<TabelaRm[]> {
  return new Promise((resolve, reject) => {
    if (!db) return reject("Database connection is not available");

    db.all(`SELECT * FROM rm_alunos WHERE ra = ${ra}`, (err, rows:TabelaRm[]) => {
      if (err) {
        console.error("Erro ao executar consulta:", err.message);
        reject(err.message);
      } else {
        resolve(rows);
      }
    });
  });

}

// CADASTRA UM NOVO RM
export function insertIntoRm(obj: TypeNewCadastro): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!db) return reject("Database connection is not available");

    const query = `INSERT INTO rm_alunos (nome, ra,  dig) VALUES (?, ?, ?)`;

    db.run(query, [obj.nome, obj.ra, obj.dig], function (err) {
      if (err) {
        console.error("Erro ao inserir registro:", err.message);
        reject("Erro ao inserir registro: " + err.message);
      } else if (this.changes > 0) {
        resolve("Registro inserido com sucesso");
      } else {
        reject("Nenhum registro foi inserido");
      }
    });
  });
}

