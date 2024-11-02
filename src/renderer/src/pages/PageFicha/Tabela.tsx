import styles from '@renderer/src/pages/PageFicha/style.module.css'


export const Tabela = ()=>{

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

      </tbody>
    </table>
  )
}