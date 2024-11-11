import {TypeForm} from '../renderer/src/models/SchemaForm'
export type Aluno = {
    RA: string;
    Nome: string;
    DatadeNascimento: string;
    Sexo: string;
    RaçaCor: string;
    TiposSanguíneo: string;
    E_mail: string;
    Filiação1: string;
    Filiação2: string;
    ParticipadoProgramaBolsaFamília: string;
    IdentificaçãoÚnica_Educacenso: string;
    Nacionalidade: string;
    MunicípiodeNascimento: string;
    CPF: string;
    RG: string;
    RNE: string;
    DataEmissãoRGRNE: string;
    NIS: string;
    CartãoNacionaldeSaúde_SUS: string;
    EmisCert: string;
    Certidão: string;
    Endereço: string;
    Zona: string;
    CEP: string;
    Cidade: string;
    Telefone: string;
  };

export type TableAluno = {
  _id: string;
  _rev?: string;
} & Aluno


type FormType = {
  _id: string;
  _rev?: string;
} & TypeForm


export type DocumentType = TableAluno | FormType;
  




