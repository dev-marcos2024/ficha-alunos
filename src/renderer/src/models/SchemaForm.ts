import * as Yup from 'yup';

const rgRegexCertidao = /^\d{6}\.\d{2}\.\d{2}\.\d{4}\.\d{1}\.\d{5}\.\d{3}\.\d{7}\.\d{2}$/;
const rgRegexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const rgRegexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
const rgRegexRa = /^\d{3}\.\d{3}\.\d{3}-[0-9X]$/;

// Definindo o esquema de validação com Yup
export const AlunoSchema = Yup.object().shape({
  rm: Yup.number().required('O campo RM é obrigatório.'),
  ra: Yup.string()
  .matches(rgRegexRa, 'O RA deve estar no formato 999.999.999-9 ou 999.999.999-X').required('O RA é obrigatório'),
  alunoNome: Yup.string().required('O nome do aluno é obrigatório.'),
  alunosRgCpf: Yup.string(),
  alunosRgCpfInput: Yup.string(),
  alunoNis: Yup.string().nullable(),
  alunoRaca: Yup.string().required('É obrigatório selecionar a cor do aluno.'),
  alunoSexo: Yup.string().required('É obrigatório selecionar o Gênero do aluno.'),
  estadoCicil: Yup.string().required('É obrigatório selecionar o Estado Civil do aluno.'),
  alunoNacionalidade: Yup.string().required('A nacionalidade é obrigatória.'),
  UfNascimento: Yup.string().length(2, 'UF deve ter 2 caracteres.').required('Campo obrigatório.'),
  municipioNascimento: Yup.string().required(),
  comarcaNascimento: Yup.string().required(),
  ufComarcaNascimento: Yup.string().length(2, 'UF deve ter 2 caracteres.').required('Campo obrigatório.'),
  certidaoNova: Yup.string(),
  certidaoDistrito: Yup.string(),
  certidaoFolha: Yup.string(),
  certidaoLivro: Yup.string(),
  certidaoNumero: Yup.string(),
  OpcaoCertidao: Yup.string(),
  DataNascimentoAluno: Yup.date().required(),
  cpfPai: Yup.string()
  .matches(rgRegexCpf, "O CPF deve estar no formato 999.999.999-99."),
  rgPai: Yup.string().min(5),
  nomePai: Yup.string(),
  telefonePai: Yup.string()
        .matches(rgRegexTelefone, 'O número de telefone deve estar no formato (XX) XXXXX-XXXX')
        .required('O telefone é obrigatório'),
  emailPai: Yup.string(),
  certidao: Yup.string()
        .matches(rgRegexCertidao, 'Certidão deve estar no formato 999999.99.99.9999.9.99999.999.9999999.99')
        
});

// Estado inicial com valores apropriados para os radios
export let InitialDateForm = {};


Object.keys(AlunoSchema.fields).map(item => {
  if (['OpcaoCertidao'].includes(item)) {
    InitialDateForm = { ...InitialDateForm, [item]: 'Nova' };
  } else {
    InitialDateForm = { ...InitialDateForm, [item]: '' };
  }
});


export type TypeForm = typeof InitialDateForm;








