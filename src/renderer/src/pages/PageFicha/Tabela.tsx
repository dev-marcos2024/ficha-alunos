import styles from './style.module.css'

export const Tabela = () => {
  const numLinhas = 6;
  const numColunas = 7;

  return (
    <table id="tabela" className={styles.tabela}>
      <thead>
      <tr>
        <th className={styles.cabecalho}>ANO</th>
        <th className={styles.cabecalho}>TURNO</th>
        <th className={styles.cabecalho}>SÉRIE</th>
        <th className={styles.cabecalho}>TURMA</th>
        <th className={styles.cabecalho}>Nº</th>
        <th className={styles.cabecalho}>ASSINATURA DO PAI/RESPONSÁVEL</th>
        <th className={styles.cabecalho}>VISTO/ DIRETOR(A)</th>
      </tr>
      </thead>
      <tbody>
      {Array.from({ length: numLinhas }).map((_, linhaIndex) => (
        <tr key={linhaIndex}>
          {Array.from({ length: numColunas }).map((_, colunaIndex) => (
            <td key={colunaIndex}></td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
}
