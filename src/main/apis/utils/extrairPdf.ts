import { app } from 'electron';
import fs from'fs';
import pdfParse from 'pdf-parse';
import path from 'node:path'
import { Aluno } from '~/src/types/TypeCadastro';
import { promises } from 'dns';

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

export const caminho = path.join(app.getPath('documents'),'ARQUIVOS');

// Criando diretório caso nao exista.
if (!fs.existsSync(caminho)) {
  fs.mkdirSync(caminho, { recursive: true });
}
const listArquivos = fs.readdirSync(caminho);

  
  

export const extractTextFromPDF = async (filePath: string) => {
  const buffer = fs.readFileSync(filePath);
  const data = await pdfParse(buffer);
  const lines = data.text.split('\n');
  let dados: Dados = {}

  lines.map((item: string) => {
    if (item.includes(':')){
        const line = item.split(':')
        if(keyIsert.includes(line[0])){
            let value = line[1].trim()
            let key = line[0].replaceAll(' ', '').replaceAll('.', '').replaceAll('/', '') ;
            if(key === "RA") value = value.slice(3, 14);
            if(key === "Telefone") value = value.split('-')[0].trim();
            
            dados[key] = value;
        }
    }
  })
  //fs.unlinkSync(filePath);

  return dados
};


export const listDataAlunos = async (): Promise<Aluno[] | []> => {
  const lista = await Promise.all(
    listArquivos.map(async (fileName) => {
      if (fileName !== 'desktop.ini') {
        return await extractTextFromPDF(path.join(caminho, fileName));
      }
      return null; // Retorna null ou outro valor caso o arquivo seja 'desktop.ini'
    })
  );
  // Filtra valores nulos, caso necessário
  return lista.filter((item) => item !== null) as Aluno[];
};






