import { ipcMain } from 'electron'
import {TabelaRm} from '~/src/types/TypeSqlite'
import {selectAll} from './databases/CrudSqlite'


// Selecionando TAbela RM
ipcMain.handle('selectAll', async (event, table: string):Promise<TabelaRm[]> =>{
    return await selectAll(table);
})
