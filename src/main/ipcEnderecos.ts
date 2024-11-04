import {ipcMain} from 'electron'
import axios from 'axios'
import {Estado} from './types/TypeUf'

const req = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades',
})

// Api para obter todos estados do brasil
ipcMain.handle("getUF", async () =>{
  const result = await req.get(`/estados`);
  return result.data.map((item: Estado) => item.sigla);
})

// Api para obter todas cidades de um determinado estado
ipcMain.handle("getCidades", async (event, uf)=>{
  const result = await req.get(`/estados/${uf}/municipios`);

  return result.data
})

// Api para obter rua pelo CEP
ipcMain.handle("getEndereco", async (event, cep)=>{
  const result = await req.get(`https://viacep.com.br/ws/${cep}/json/`);

  return result.data
})



