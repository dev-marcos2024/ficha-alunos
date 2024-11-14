import { app } from 'electron';
import sqlite3 from 'sqlite3';
import path from 'node:path';

let db: sqlite3.Database | null = null; // Declara `db` com tipo específico

app.whenReady().then(() => {

    //const dbDir = path.join(app.getPath('downloads'), '..', 'OneDrive - Prefeitura Municipal de Itupeva','Aplicacao','BD_laerte.db');
    const dbDir = path.join(app.getPath('documents'), 'BD_laerte.db');


  // Conectando ao banco de dados SQLite
  db = new sqlite3.Database(dbDir, (err: Error | null) => {
    if (err) return console.error('Erro ao conectar ao banco de dados:', err.message);
    console.log('Conectado ao banco de dados SQLite.');
  });

  // Fechar o banco de dados ao encerrar o aplicativo
  app.on('window-all-closed', () => {
    if (db) {
      db.close((err: Error | null) => {
        if (err) {
          return console.error('Erro ao fechar o banco de dados:', err.message);
        }
        console.log('Conexão com o banco de dados encerrada.');
      });
    }

    // Finaliza o aplicativo (no macOS, preserve comportamento nativo)
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});

// Exporta `db` para uso em outros módulos
export { db };