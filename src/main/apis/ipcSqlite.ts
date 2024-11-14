import { ipcMain } from 'electron'
import {TabelaRm} from '~/src/types/TypeSqlite'
import {getNewRm, selectAll, getByRa, insertIntoRm} from './databases/CrudSqlite'

// Selecionando toda Tabela 
ipcMain.handle('selectAll', async (event, table: string):Promise<TabelaRm[]> =>{
    return await selectAll(table);
})

// Selecionando o novo RM 
ipcMain.handle('getNewRm', async ():Promise<number> =>{
    return await getNewRm();
})

// Selecionando o novo RM 
ipcMain.handle('selectByRa', async (event, ra: string) =>{
    try {
        return await getByRa(ra);
    } catch (error) {
        console.log('Ouve o erro:', error)
    }
})

// CADASTRA NOVO ALUNO 
ipcMain.handle('criarNovoRm', async (event, obj):Promise<string> =>{
    return await insertIntoRm(obj);
})

