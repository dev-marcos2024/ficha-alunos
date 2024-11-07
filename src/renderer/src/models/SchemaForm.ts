import * as Yup from 'yup';

// Definindo o esquema de validação com Yup
export const AlunoSchema = Yup.object().shape({
  rm: Yup.string().required('O campo RM é obrigatório.'),
  ra: Yup.string()
    .length(11, 'O RA deve ter 11 dígitos.')
    .required('O campo RA é obrigatório.'),
  alunoNome: Yup.string().required('O nome do aluno é obrigatório.'),
  alunosRgCpf: Yup.string()
    .matches(/^\d{11}$/, 'O CPF deve ter 11 dígitos.')
    .nullable(),
  alunosRgCpfInput: Yup.string()
    .matches(/^\d{9}$/, 'O RG deve ter 9 dígitos.')
    .nullable(),
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
  DataNascimentoAluno: Yup.date().required()
});

// Estado inicial com valores apropriados para os radios
export const InitialDateForm = {
  rm: '',
  ra: '',
  alunoNome: '',
  alunosRgCpf: '',    
  alunosRgCpfInput: '',
  alunoNis: '',
  alunoRaca: '', 
  alunoSexo: '',
  estadoCicil: '',
  alunoNacionalidade: '',
  UfNascimento: '',
  municipioNascimento: '',
  comarcaNascimento: '',
  ufComarcaNascimento: '',
  certidaoNova: '',
  certidaoDistrito:'',
  certidaoFolha: '',
  certidaoLivro: '',
  certidaoNumero: '',
  OpcaoCertidao: 'Nova',
  DataNascimentoAluno: ''
};

export type TypeForm = typeof InitialDateForm;








