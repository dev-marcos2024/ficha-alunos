import { app } from 'electron';
import fs from'fs';
import pdfParse from 'pdf-parse';
import path from 'node:path'
import { Aluno } from '~/src/types/TypeCadastro';

const keyIsert = [
    "RA", "Nome", "Data de Nascimento", "Sexo", "Raça/Cor", "Tipos Sanguíneo", "E-mail", 
    "Filiação 1", "Filiação 2", "Participa do Programa Bolsa Família", 
    "Identificação Única - Educacenso", "Nacionalidade", "Município de Nascimento",
     "CPF", "RG", "R.N.E", "Data Emissão RG/RNE", "NIS", 
    "Cartão Nacional de Saúde - SUS",  "Emis. Cert.", 
    "Certidão", "Endereço", "Zona", "CEP", "Cidade", "Telefone"
  ]
interface Dados {
  [key: string]: string;
}

const caminho = path.join(app.getPath('downloads'),'..','OneDrive', 'arquivos');
const listArquivos = fs.readdirSync(caminho, );

  
  

export const extractTextFromPDF = async (filePath: string) => {
  const buffer = fs.readFileSync(filePath);
  const data = await pdfParse(buffer);
  const lines = data.text.split('\n');
  let dados: Dados = {}

  lines.map((item: string) => {
    if (item.includes(':')){
        const line = item.split(':')
        if(keyIsert.includes(line[0])){
            let key = line[0].replaceAll(' ', '').replaceAll('.', '').replaceAll('/', '') ;
            dados[key] = line[1];
        }
    }
  })

  return dados
};


export const listDataAlunos = async (): Promise<Dados[] | []>=>{
  
  const lista = await Promise.all(
    listArquivos.map(async (fileName) => extractTextFromPDF(path.join(caminho, fileName)))
);
  return lista;
}





