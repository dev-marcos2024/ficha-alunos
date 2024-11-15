import styles from './style.module.css'
import { Tabela } from './Tabela'
import { useLocation } from 'react-router-dom';
import { TypeForm } from '@renderer/src/models/SchemaForm'
import { dataFormatada } from '../../utils/dataFormatada'

export const Main = ()=>{

  const data: TypeForm = useLocation().state;

  const mesEstenco = (mes:string) => {
    const data = new Date(2000, parseInt(mes) - 1);
    return data.toLocaleDateString('pt-BR', { month: 'long' });
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>FICHA CADASTRAL DO ALUNO</h1>

      <div className={styles.container}>
        <div className={`${styles.linha} ${styles.linha1}`}>
          <div className={`${styles.cel} ${styles.l1Item1}`}>
            <p>01 </p>REGISTRO DE MATRÍCULA
          </div>
          <div className={`${styles.cel} ${styles.l1Item2}`}>
            <p>02 </p>REGISTRO DE MATRÍCULA
          </div>
          <div className={`${styles.cel} ${styles.l1Item3}`}>
            <p>03 </p>Nº DE INDENTIFICAÇÃO SOCIAL
          </div>
          <div className={`${styles.cel} ${styles.l1Item4}`}>
            <strong>RM</strong>
            <span id="rm">{data && data.rm}</span>
          </div>
          <div className={`${styles.cel} ${styles.l1Item5}`}>
            <strong>RA</strong>
            <span id="ra">{data && data.ra}</span>
          </div>
          <div className={`${styles.cel} ${styles.l1Item6}`}>
            <strong>NIS</strong> <span id="nis">{data && data.alunoNis}</span>
          </div>
        </div>

        <div className={`${styles.linha} ${styles.linha2}`}>
          <div className={styles.secao4}>
            <div className={`${styles.cel} ${styles.l2Item1}`}>
              <p>04</p>
            </div>
            <div className={`${styles.cel} ${styles.l2Item2}`}>
              <strong>NOME DO ALUNO (A)</strong>
              <span id="aluno-nome">{data && data.alunoNome}</span>
            </div>
            <div className={`${styles.cel} ${styles.l2Item3}`}>
              <strong>DATA DE NASCIMENTO</strong>
              <span id="aluno-nascimento">{data && dataFormatada(data.DataNascimentoAluno)}</span>
            </div>
            <div className={`${styles.cel} ${styles.l2Item4}`}>
              <strong>
                <span id="opcao-cpf">({data && data.alunosRgCpf === 'CPF' && 'X'})</span> CPF
                <span id="opcao-rg">({data && data.alunosRgCpf === 'RG' && 'X'})</span> RG DO ALUNO
              </strong>
              <span id="aluno-rg-cpf">{data && data.alunosRgCpfInput}</span>
            </div>
          </div>

          <div className={styles.secao5}>
            <div>
              <p>05</p> SEXO
            </div>
            <div>
              FEM. <span id="opcao-fem">({data && data.alunoSexo === 'feminino' && 'X'})</span>
            </div>
            <div>
              MASC. <span id="opcao-masc">({data && data.alunoSexo === 'masculino' && 'X'})</span>
            </div>
          </div>
        </div>

        <div className={`${styles.linha} ${styles.linha3}`}>
          <div>
            <p>05</p>
            <div>
              <p>RAÇA/COR</p>(De acordo portaria INEP 156 de 20 de outubro do ano de 2.004)
            </div>
          </div>
          <div className={styles.l}></div>
          <div>
            BRANCA<span id="raca-branca">({data && data.alunoRaca === 'branca' && 'X'}) </span>
            PRETA<span id="raca-preta">({data && data.alunoRaca === 'preta' && 'X'}) </span>
            PARDA<span id="raca-parda">({data && data.alunoRaca === 'parda' && 'X'}) </span>
            AMARELA<span id="raca-amarela">({data && data.alunoRaca === 'amarela' && 'X'}) </span>
            INDÍGENA{' '}
            <span id="raca-indigina">({data && data.alunoRaca === 'indigina' && 'X'}) </span>
            NÃO DECLARADA{' '}
            <span id="raca-nao-declarada">
              ({data && data.alunoRaca === 'nao declarada' && 'X'})
            </span>
          </div>
        </div>

        <div className={`${styles.linha} ${styles.linha4}`}>
          <div className={`${styles.cel} ${styles.l4Item1}`}>
            <p>07</p>
          </div>
          <div className={`${styles.cel} ${styles.l4Item2}`}>
            <strong>NACIONALIDADE</strong>{' '}
            <span id="nacionalidade">{data && data.alunoNacionalidade}</span>{' '}
            <strong>ESTADO CÍVIL</strong> <span id="etado-civil">{data && data.estadoCicil}</span>
          </div>
          <div className={`${styles.cel} ${styles.l4Item3}`}>
            <strong>MUNICÍPIO DE NASCIMENTO</strong>{' '}
            <span id="munucupio-nascimento">{data && data.municipioNascimento}</span>{' '}
            <strong>ESTADO</strong> <span id="estado-nascimento">{data && data.UfNascimento}</span>
          </div>
          <div className={`${styles.cel} ${styles.l4Item4}`}>
            <strong>MUNIC/COMARCA DE NASCIMENTO</strong>
            <span id="comarca-nascimento">{data && data.comarcaNascimento}</span>{' '}
            <strong>ESTADO</strong>
            <span id="uf-nascimento">{data && data.ufComarcaNascimento}</span>
          </div>
          { data && data.certidaoDistrito && data.certidaoNumero ?
            <div className={`${styles.cel} ${styles.l4Item5}`}>
              <strong>DISTRITO CERTIDÃO</strong>
              <span id="certidao-distrito">{data && data.certidaoDistrito}</span> <strong>FOLHA</strong>
              <span id="certidao-folha">{data && data.certidaoFolha}</span> <strong>LIVRO</strong>
              <span id="certidao-livro">{data && data.certidaoLivro}</span>
              <p>N°</p>
              <span id="certidao-numero">{data && data.certidaoNumero}</span>
            </div>
          :
            <div className={`${styles.cel} ${styles.l4Item6} flex gap-3`}>
              <strong>CERTIDÃO NOVA (MATRICULA)</strong>
              <span id="certidao-nova">{data && data.certidaoNova}</span>
              <strong>DATA EMISSÃO</strong>
              <span id='dataEmissao'>{ data &&  data.emsCertidao }</span>
            </div>
          }
        </div>

        <div className={`${styles.linha} ${styles.linha5}`}>
          <div className={`${styles.cel} ${styles.l5Item1}`}>
            <p>08</p>
          </div>

          <div className={`${styles.cel} ${styles.l5Item2}`}>
            <strong>NOME DO PAI</strong> <span id="pai-nome">{data && data.nomePai}</span>
          </div>

          <div className={`${styles.cel} ${styles.l5Item3}`}>

            <p>DATA DE NASC. </p>
            <span id="pai-data-nascimento">{data && dataFormatada(data.dataNascimentoPai)}</span> <strong>RG</strong>
            <span id="pai-rg">{data && data.rgPai}</span> <strong>CPF</strong>
            <span id="pai-cpf">{data && data.cpfPai}</span>
          </div>
          <div className={`${styles.cel} ${styles.l5Item4}`}>
            <p>TELEFONE PAI: </p> <span id="pai-telefone">{data && data.telefonePai}</span> <strong>E-MAIL PAI</strong>{' '}
            <span id="pai-email" className={'lowercase'}>{data && data.emailPai}</span>
          </div>
          <div className={`${styles.cel} ${styles.l5Item5}`}>
            <strong>NOME DA MÃE</strong> <span id="mae-nome">{data && data.nomeMae}</span>
          </div>
          <div className={`${styles.cel} ${styles.l5Item6}`}>
            <p>DATA DE NASC. </p>
            <span id="mae-data-nascimento">{data && dataFormatada(data.dataNascimentoMae)}</span> <strong>RG</strong>
            <span id="mae-rg">{data && data.rgMae}</span> <strong>CPF</strong>
            <span id="mae-cpf">{data && data.cpfMae}</span>
          </div>
          <div className={`${styles.cel} ${styles.l5Item7}`}>
            <p>TELEFONE MAE: </p> <span id="mae-telefone">{data && data.telefoneMae}</span> <strong>E-MAIL MAE</strong>{' '}
            <span id="mae-email" className={`lowercase`}>{data && data.emailMae}</span>
          </div>
        </div>

        <div className={`${styles.linha} ${styles.linha6}`}>

          <div className={`${styles.cel} ${styles.l6Item1}`}>
            <p>09</p>
          </div>

          <div className={`${styles.cel} ${styles.l6Item2}`}>
            <p>(R. Av. etc.)</p> <span id="endereco-rua">{data && data.rua}</span> <p>Nº</p>{' '}
            <span id="endereco-numero">{data && data.enderecoNumero}</span>
          </div>
          <div className={`${styles.cel} ${styles.l6Item3}`}>
            <strong>BAIRRO</strong> <span id="endereco-bairro">{data && data.bairro}</span> <strong>CIDADE</strong>{' '}
            <span id="endereco-cidade">{data && data.cidade}</span>
          </div>
          <div className={`${styles.cel} ${styles.l6Item4}`}>
            <strong>CEP.</strong>
            <span id="endereco-cep">{data && data.cep}</span> <strong>TEL.</strong>
            <span id="endereco-tel">{data && data.telefoneFixo}</span>
            <strong>CEL.</strong> <span id="endereco-cel">{data && data.celular}</span>
          </div>
          <div className={`${styles.cel} ${styles.l6Item5}`}>
            <strong>Outras informações / (mudança de endereço)</strong>
            <span id="outras-informacoes">i{data && data.infoMudancaIndereco}</span>
          </div>
          <div className={styles.l6Linha}></div>
        </div>

        <div className={`${styles.linha} ${styles.linha7}`}>
          <div className={`${styles.cel} ${styles.l7Item1}`}>
            <p>10</p>
            <p>MATRÍCULA E RENOVAÇÃO DE MATRÍCULA</p>
          </div>

          <div className={`${styles.cel} ${styles.l7Item2}`}>
            <div>
              <p>SOLICITO matrícula no (a)</p> <span id="matricula-serie">{data && data.serie}</span>
              <p>do Ensino </p> <span id="matricula-ensino">{data && data.ensino}</span>
              <p>, e</p>
            </div>
            <div>
              <p>DECLARO</p> acatar as normas regimentais desse Estabelecimento de Ensino.
            </div>
          </div>

          <div className={`${styles.cel} ${styles.l7Item3}`}>
            <div></div>
            <div>
              <p>Itupeva,</p>
              <span id="matricula-dia">{data && data.dataMatricula.split('-')[2]}</span>
              <p>de</p>
              <span id="matricula-mes">{data &&
                mesEstenco(data.dataMatricula.split('-')[1])
              }
              </span>
              <p>de</p>
              <span id="matricula-ano">{data && data.dataMatricula.split('-')[0]}</span>
            </div>
          </div>
        </div>

        <Tabela />
      </div>
    </main>
  )
}