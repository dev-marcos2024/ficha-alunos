import { app, shell, BrowserWindow, ipcMain, protocol } from 'electron';
import path, { join } from 'node:path';
import { electronApp, optimizer, is } from '@electron-toolkit/utils';
import { createFileRoute, createURLRoute } from 'electron-router-dom';
import  './apis/ipc'
import './apis/ipcSqlite'

function createWindow() {
  // Cria a janela principal do aplicativo.
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 800,
    minWidth: 1200,
    backgroundColor: '#222222',
    show: false,
    autoHideMenuBar: false,
    ...(process.platform === 'linux' ? {
      icon: path.join(__dirname, '../../build/icon.png')
    } : process.platform === 'win32' && {
      icon: path.join(__dirname, 'resources', 'icon.png')
    }),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    }
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  const devServerURL = createURLRoute(process.env['ELECTRON_RENDERER_URL']!, 'main');
  const fileRoute = createFileRoute(join(__dirname, '../renderer/index.html'), 'main');

  // Carrega o URL remoto para desenvolvimento ou o arquivo HTML local para produção.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(devServerURL);
  } else {
    mainWindow.loadFile(...fileRoute);
  }

  ipcMain.on('print-request', (event) => {
    mainWindow.webContents.print({}, (success) => {
      if (success) console.log('Impressão bem-sucedida');
      else console.log('Falha na impressão');
    });
  });
}

app.whenReady().then(() => {
  // Define o id do modelo de usuário do aplicativo para Windows
  electronApp.setAppUserModelId('com.electron');

  // Configura o protocolo customizado para servir arquivos da pasta 'uploads'
  protocol.registerFileProtocol('local-file', (request, callback) => {
    const url = request.url.replace('local-file://', '');
    const filePath = path.join(app.getPath('userData'), url); // Caminho completo do arquivo
    callback({ path: filePath });
  });

  // Observa atalhos da janela quando criados
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });


  // Cria a janela principal
  createWindow();

  // Em macOS, recria a janela quando o ícone do dock é clicado
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Fecha o aplicativo quando todas as janelas são fechadas, exceto no macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
