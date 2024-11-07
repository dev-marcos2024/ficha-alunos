import { FiliacaoMae } from './FiliacaoPai/Mae'
import { FiliacaoPai } from './FiliacaoPai/Pai'
import styles from './style.module.css'


export const FiliacaoAluno = ()=>{
    return (
        <fieldset className={'fieldset flex flex-col gap-6'}>
            <legend>Filiação</legend>

            <FiliacaoPai/>

            <FiliacaoMae/>

        </fieldset>
    )
}