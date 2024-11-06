import * as Yup from 'yup';

// Definindo o esquema de validação com Yup
export const AlunoSchema = Yup.object().shape({
  rm: Yup.string().required('O campo RM é obrigatório.'),
  ra: Yup.string().length(11, 'O RA deve ter 11 dígitos.').required('O campo RA é obrigatório.'),
  alunoNome: Yup.string().required('O nome do aluno é obrigatório.'),
  alunosRgCpf: Yup.string(),
  alunosRgCpfInput: Yup.string(),
  alunoNis: Yup.string(),
  alunoRaca: Yup.string().required('É obrigatório selecionar a cor do aluno.'),
  alunoSexo: Yup.string().required('É obrigatório selecionar o Genero do aluno.'),
  estadoCicil: Yup.string().required('É obrigatório selecionar o Estado Civil do aluno.'),
  alunoNacionalidade: Yup.string().required(),
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
  estadoCicil:'',
  alunoNacionalidade: '',
};

export type TypeForm = typeof InitialDateForm;







