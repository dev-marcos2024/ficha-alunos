import * as Yup from 'yup';

// Definindo regex
const rgRegexCertidao = /^\d{6}\.\d{2}\.\d{2}\.\d{4}\.\d{1}\.\d{5}\.\d{3}\.\d{7}\.\d{2}$/;
const rgRegexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const rgRegexTelefone = /^\(\d{2}\) \d{4}-\d{4}$/;
const rgRegexCelular = /^\(\d{2}\) \d{5}-\d{4}$/;
const rgRegexRa = /^\d{3}\.\d{3}\.\d{3}.+/;
const rgRegexCep = /^\d{5}-\d{3}$/;

// Esquema de validação Yup
export const AlunoSchema = Yup.object().shape({
  // Informações básicas do aluno
  rm: Yup.number().required(),
  ra: Yup.string()
    .matches(rgRegexRa, 'O RA deve estar no formato 999.999.999-9 ou 999.999.999-X')
    .required('O RA é obrigatório'),
  alunoNome: Yup.string().required('O nome do aluno é obrigatório.'),
  alunoNis: Yup.string().nullable(),
  alunoRaca: Yup.string().required('É obrigatório selecionar a cor do aluno.'),
  alunoSexo: Yup.string().required('É obrigatório selecionar o Gênero do aluno.'),
  estadoCicil: Yup.string().required('É obrigatório selecionar o Estado Civil do aluno.'),
  alunoNacionalidade: Yup.string().required('A nacionalidade é obrigatória.'),
  DataNascimentoAluno: Yup.date().required("Data de nascimento é obrigatória"),
  emisCert: Yup.date(),
  // Informações de nascimento e certidão
  UfNascimento: Yup.string().length(2, 'UF deve ter 2 caracteres.').required('Campo obrigatório.'),
  municipioNascimento: Yup.string().required(),
  comarcaNascimento: Yup.string().required(),
  ufComarcaNascimento: Yup.string().length(2, 'UF deve ter 2 caracteres.').required('Campo obrigatório.'),
  certidaoNova: Yup.string()
    .nullable()
    .notRequired()
    .test('is-valid-certidao', 'Certidão no formato inválido (999999.99.99.9999.9.99999.999.9999999.99).',
      (value) => !value || rgRegexCertidao.test(value)),
  certidaoDistrito: Yup.string(),
  certidaoFolha: Yup.string(),
  certidaoLivro: Yup.string(),
  certidaoNumero: Yup.string(),
  OpcaoCertidao: Yup.string(),
  emsCertidao: Yup.date(),

  // Informações dos pais
  cpfPai: Yup.string().matches(rgRegexCpf, "O CPF deve estar no formato 999.999.999-99."),
  rgPai: Yup.string().min(5),
  nomePai: Yup.string(),
  dataNascimentoPai: Yup.date(),
  telefonePai: Yup.string()
    .nullable()
    .notRequired()
    .test('is-valid-phone', 'O número de telefone deve estar no formato (XX) XXXXX-XXXX', (value) => !value || rgRegexCelular.test(value)),

  cpfMae: Yup.string().matches(rgRegexCpf, "O CPF deve estar no formato 999.999.999-99."),
  rgMae: Yup.string().min(5),
  nomeMae: Yup.string(),
  dataNascimentoMae: Yup.date(),
  telefoneMae: Yup.string()
    .nullable()
    .notRequired()
    .test('is-valid-phone', 'O número de telefone deve estar no formato (XX) XXXXX-XXXX', (value) => !value || rgRegexCelular.test(value)),
  emailMae: Yup.string(),

  // Endereço
  cep: Yup.string()
    .matches(rgRegexCep, 'CEP deve estar no formato 99999-999')
    .required('O CEP é obrigatório'),
  rua: Yup.string().required('Nome da rua é obrigatório'),
  enderecoNumero: Yup.number().required('Número obrigatório'),
  bairro: Yup.string().required('O bairro é obrigatório'),
  cidade: Yup.string().required('A cidade é obrigatória'),
  telefoneFixo: Yup.string()
    .nullable()
    .notRequired()
    .test('is-valid-phone', 'O número de telefone deve estar no formato (XX) XXXX-XXXX', (value) => !value || rgRegexTelefone.test(value)),
  celular: Yup.string()
    .nullable()
    .notRequired()
    .test('is-valid-phone', 'O número de telefone deve estar no formato (XX) XXXXX-XXXX', (value) => !value || rgRegexCelular.test(value)),
  infoMudancaIndereco: Yup.string(),

// Informações escolares
  serie: Yup.string().required('A série é obrigatória.'),
  turma: Yup.string().required('A turma é obrigatória.'),
  ensino: Yup.string().required('O tipo de ensino é obrigatório.'),
  dataMatricula: Yup.date().required('A data de matrícula é obrigatória.'),


  // Outras informações
  alunosRgCpf: Yup.string(),
  alunosRgCpfInput: Yup.string(),
  fotoAluno: Yup.mixed(),
});

// Estado inicial do formulário
export const InitialDateForm = {
  rm: '',
  ra: '',
  fileName: '',
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
  certidaoDistrito: '',
  certidaoFolha: '',
  certidaoLivro: '',
  certidaoNumero: '',
  OpcaoCertidao: 'Nova',
  DataNascimentoAluno: '',
  emsCertidao: '',

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

  cep: '',
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

// Tipo do formulário
export type TypeForm = typeof InitialDateForm;
