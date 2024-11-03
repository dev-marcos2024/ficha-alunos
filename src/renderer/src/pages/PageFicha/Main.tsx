import styles from './style.module.css'
import { Tabela } from './Tabela'

export const Main = ()=>{

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>FICHA CADASTRAL DO ALUNO</h1>

      <div className={styles.container}>

        <div className={`${styles.linha} ${styles.linha1}`}>
          <div className={`${styles.cel} ${styles.l1Item1}`}>
            <p>01</p>REGISTRO DE MATRÍCULA
          </div>
          <div className={`${styles.cel} ${styles.l1Item2}`}>
            <p>02</p>REGISTRO DE MATRÍCULA
          </div>
          <div className={`${styles.cel} ${styles.l1Item3}`}>
            <p>03</p>Nº DE INDENTIFICAÇÃO SOCIAL
          </div>
          <div className={`${styles.cel} ${styles.l1Item4}`}>
            <strong>RM</strong><span id="rm"></span>
          </div>
          <div className={`${styles.cel} ${styles.l1Item5}`}>
            <strong>RA</strong><span id="ra"></span>
          </div>
          <div className={`${styles.cel} ${styles.l1Item6}`}>
            <strong>NIS</strong> <span id="nis"></span>
          </div>
        </div>

        <div className={`${styles.linha} ${styles.linha2}`}>
          <div className={styles.secao4}>
            <div className={`${styles.cel} ${styles.l2Item1}`}>
              <p>04</p>
            </div>
            <div className={`${styles.cel} ${styles.l2Item2}`}>
              <strong>NOME DO ALUNO (A)</strong>
              <span id="aluno-nome">Marcos Roberto</span>
            </div>
            <div className={`${styles.cel} ${styles.l2Item3}`}>
              <strong>DATA DE NASCIMENTO</strong>
              <span id="aluno-nascimento"></span>
            </div>
            <div className={`${styles.cel} ${styles.l2Item4}`}>
              <strong>
                (<span id="opcao-cpf"></span>)CPF (<span id="opcao-rg"></span>)RG
                DO ALUNO
              </strong>
              <span id="aluno-rg-cpf"></span>
            </div>
          </div>
          <div className={styles.secao5}>
            <div>
              <p>05</p>SEXO
            </div>
            <div>
              FEM. (<span id="opcao-fem"></span>)
            </div>
            <div>
              MASC. (<span id="opcao-masc"></span>)
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
            BRANCA (<span id="raca-branca"></span>) PRETA (<span
            id="raca-preta"></span> ) PARDA (<span id="raca-parda"></span>)
            AMARELA (<span id="raca-amarela"></span> ) INDÍGENA (<span
            id="raca-indigina"></span>) NÃO DECLARADA (<span
            id="raca-nao-declarada"></span>)
          </div>
        </div>

        <div className={`${styles.linha} ${styles.linha4}`}>
          <div className={`${styles.cel} ${styles.l4Item1}`}>
            <p>07</p>
          </div>
          <div className={`${styles.cel} ${styles.l4Item2}`}>
            <strong>NACIONALIDADE</strong> <span id="nacionalidade"></span>{" "}
            <strong>ESTADO CÍVIL</strong> <span id="etado-civil"></span>
          </div>
          <div className={`${styles.cel} ${styles.l4Item3}`}>
            <strong>MUNICÍPIO DE NASCIMENTO</strong>{" "}
            <span id="munucupio-nascimento"></span> <strong>ESTADO</strong>{" "}
            <span id="estado-nascimento"></span>
          </div>
          <div className={`${styles.cel} ${styles.l4Item4}`}>
            <strong>MUNIC/COMARCA DE NASCIMENTO</strong>
            <span id="comarca-nascimento"></span> <strong>ESTADO</strong>
            <span id="uf-nascimento"></span>
          </div>
          <div className={`${styles.cel} ${styles.l4Item5}`}>
            <strong>DISTRITO CERTIDÃO</strong>
            <span id="certidao-distrito"></span> <strong>FOLHA</strong>
            <span id="certidao-folha"></span> <strong>LIVRO</strong>
            <span id="certidao-livro"></span>
            <p>N°</p>
            <span id="certidao-numero"></span>
          </div>
          <div className={`${styles.cel} ${styles.l4Item6}`}>
            <strong>CERTIDÃO NOVA (MATRICULA)</strong>
            <span id="certidao-nova"></span>
          </div>
        </div>

        <div className={`${styles.linha} ${styles.linha5}`}>
          <div className={`${styles.cel} ${styles.l5Item1}`}>
            <p>08</p>
          </div>

          <div className={`${styles.cel} ${styles.l5Item2}`}>
            <strong>NOME DO PAI</strong> <span id="pai-nome"></span>
          </div>
          <div className={`${styles.cel} ${styles.l5Item3}`}>
            <p>DATA DE NASC. </p>
            <span id="pai-data-nascimento"></span> <strong>RG</strong>
            <span id="pai-rg"></span> <strong>CPF</strong>
            <span id="pai-cpf"></span>
          </div>
          <div className={`${styles.cel} ${styles.l5Item4}`}>
            <p>TELEFONE PAI: </p> <span id="pai-telefone"></span>{" "}
            <strong>E-MAIL PAI</strong> <span id="pai-email"></span>
          </div>
          <div className={`${styles.cel} ${styles.l5Item5}`}>
            <strong>NOME DA MÃE</strong> <span id="mae-nome"></span>
          </div>
          <div className={`${styles.cel} ${styles.l5Item6}`}>
            <p>DATA DE NASC. </p>
            <span id="mae-data-nascimento"></span> <strong>RG</strong>
            <span id="mae-rg"></span> <strong>CPF</strong>
            <span id="mae-cpf"></span>
          </div>
          <div className={`${styles.cel} ${styles.l5Item7}`}>
            <p>TELEFONE MAE: </p> <span id="mae-telefone"></span>{" "}
            <strong>E-MAIL MAE</strong> <span id="mae-email"></span>
          </div>
        </div>

        <div className={`${styles.linha} ${styles.linha6}`}>
          <div className={`${styles.cel} ${styles.l6Item1}`}>
            <p>09</p>
          </div>
          <div className={`${styles.cel} ${styles.l6Item2}`}>
            <p>(R. Av. etc.)</p> <span id="endereco-rua"></span> <p>Nº</p>{" "}
            <span id="endereco-numero"></span>
          </div>
          <div className={`${styles.cel} ${styles.l6Item3}`}>
            <strong>BAIRRO</strong> <span id="endereco-bairro"></span>{" "}
            <strong>CIDADE</strong> <span id="endereco-cidade"></span>
          </div>
          <div className={`${styles.cel} ${styles.l6Item4}`}>
            <strong>CEP.</strong><span id="endereco-cep"></span> <strong>TEL.</strong>
            <span id="endereco-tel"></span> <strong>CEL.</strong> <span id="endereco-cel"></span>
          </div>
          <div className={`${styles.cel} ${styles.l6Item5}`}>
            <strong>Outras informações / (mudança de endereço)</strong>
            <span id="outras-informacoes"></span>
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
              <p>SOLICITO matrícula no (a)</p> <span id="matricula-serie"></span>
              <p>do Ensino </p> <span id="matricula-ensino"></span>
              <p>, e</p>
            </div>
            <div>
              <p>DECLARO</p> acatar as normas regimentais desse Estabelecimento de Ensino.
            </div>
          </div>

          <div className={`${styles.cel} ${styles.l7Item3}`}>
            <div></div>
            <div>
              <p>Itupeva,</p><span id="matricula-dia"></span>
              <p>de</p><span id="matricula-mes"></span>
              <p>de</p><span id="matricula-ano"></span>
            </div>
          </div>
        </div>

        <Tabela/>
      </div>
    </main>
  )
}