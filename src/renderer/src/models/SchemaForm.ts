import * as Yup from 'yup';

const rgRegexCertidao = /^\d{6}\.\d{2}\.\d{2}\.\d{4}\.\d{1}\.\d{5}\.\d{3}\.\d{7}\.\d{2}$/;
const rgRegexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const rgRegexTelefone = /^\(\d{2}\) \d{4}-\d{4}$/;
const rgRegexCelular = /^\(\d{2}\) \d{5}-\d{4}$/;
const rgRegexRa = /^\d{3}\.\d{3}\.\d{3}-[0-9X]$/;
const rgRegexCep = /^\d{5}-\d{3}$/

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
  certidaoNova: Yup.string().matches(rgRegexCertidao, 'Certidão deve estar no formato 999999.99.99.9999.9.99999.999.9999999.99'),
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
  dataNascimentoPai: Yup.date(),
  telefonePai: Yup.string()
  .nullable()
  .notRequired()
  .test(
    'is-valid-phone',
    'O número de telefone deve estar no formato (XX) XXXX-XXXX',
    (value) => !value || rgRegexCelular.test(value)
  ),

  emailMae: Yup.string(),
  cpfMae: Yup.string()
    .matches(rgRegexCpf, "O CPF deve estar no formato 999.999.999-99."),
  nomeMae: Yup.string() ,
  dataNascimentoMae: Yup.date(),
  telefoneMae: Yup.string()
  .nullable()
  .notRequired()
  .test(
    'is-valid-phone',
    'O número de telefone deve estar no formato (XX) XXXX-XXXX',
    (value) => !value || rgRegexCelular.test(value)
  ),
  fotoAluno: Yup.mixed(),

  cep: Yup.string()
          .matches(rgRegexCep, 'CEP deve estar no formato 99999-999')
          .required('O CEP é obrigatório'),
  rua: Yup.string().required('Nome da rua é obrigatorio '),
  enderecoNumero: Yup.number().required('Numero da residencia é obrigatorio'),
  bairro: Yup.string().required("O bairro é obrigatório"),
  cidade: Yup.string().required('A cidade é obrigatória'),
  telefoneFixo: Yup.string()
    .nullable()
    .notRequired()
    .test(
      'is-valid-phone',
      'O número de telefone deve estar no formato (XX) XXXX-XXXX',
      (value) => !value || rgRegexTelefone.test(value)
    ),
  celular: Yup.string()
  .nullable()
  .notRequired()
  .test(
    'is-valid-phone',
    'O número de telefone deve estar no formato (XX) XXXX-XXXX',
    (value) => !value || rgRegexCelular.test(value)
  ),
  infoMudancaIndereco: Yup.string(),

  serie: Yup.string().required(),
  turma: Yup.string().required(),
  ensino: Yup.string().required(),
  dataMatricula: Yup.date().required(),
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
  DataNascimentoAluno: '',

  cpfPai: '',
  rgPai: '',
  nomePai: '',
  telefonePai: '',
  emailPai: '',
  dataNascimentoPai: '',

  cpfMae: '',
  rgMae: '',
  nomeMae: '',
  telefoneMae: '',
  emailMae: '',
  dataNascimentoMae: '',
  fotoAluno: '',

  cep:'',
  rua: '',
  enderecoNumero: '',
  bairro: '',
  cidade: '',
  telefoneFixo: '',
  celular: '',
  infoMudancaIndereco: '',
  serie: '',
  turma: '',
  ensino: '',
  dataMatricula: '',
};


export type TypeForm = typeof InitialDateForm;








