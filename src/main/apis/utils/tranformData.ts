import { Aluno } from '~/src/types/TypeCadastro';
import {TypeForm} from '~/src/renderer/src/models/SchemaForm'


export function transformAlunoToInitialDateForm(aluno: Aluno): TypeForm {
    const opcao = aluno.CPF !== ''? 'CPF': 'RG';
    return {
      rm: '',
      ra: aluno.RA,
      fileName: '',
      alunoNome: aluno.Nome,
      alunosRgCpf: opcao,
      alunosRgCpfInput: aluno.CPF || aluno.RG,
      alunoNis: aluno.NIS,
      alunoRaca: '',
      alunoSexo: '',
      estadoCicil: '',
      alunoNacionalidade: aluno.Nacionalidade,
      UfNascimento: '', // Mapeamento ausente no tipo Aluno
      municipioNascimento: aluno.MunicípiodeNascimento,
      comarcaNascimento: '',
      ufComarcaNascimento: '',
      certidaoNova: aluno.Certidão,
      certidaoDistrito: '',
      certidaoFolha: '',
      certidaoLivro: '',
      certidaoNumero: '',
      OpcaoCertidao: '',
      DataNascimentoAluno: aluno.DatadeNascimento,
      emisCert: aluno.EmisCert,
      cpfPai: '',
      rgPai: '',
      nomePai: aluno.Filiação2,
      telefonePai: '',
      emailPai: '',
      dataNascimentoPai: '',
      cpfMae: '',
      rgMae: '',
      nomeMae: aluno.Filiação1,
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
  }
  