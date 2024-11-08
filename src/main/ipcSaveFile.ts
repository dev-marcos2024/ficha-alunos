import { ipcMain, app } from 'electron';
import fs from 'fs';
import path from 'path';

ipcMain.handle('uploadFile', async (event, file) => {
  const uploadsDir = path.join(app.getPath('userData'), 'uploads');
  
  // Cria a pasta 'uploads' se não existir
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }

  const savePath = path.join(uploadsDir, file.name);

  try {
    fs.copyFileSync(file.path, savePath);
    // Retorna o caminho no formato 'file://'
    const fileUrl = `file://${savePath}`;
    return { message: 'File saved', fileUrl };
  } catch (error) {
    console.error('Error saving file:', error);
    return { message: 'Error saving file' };
  }
});
