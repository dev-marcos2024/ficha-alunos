import { useFormikContext } from "formik";
import { InputDate } from "../Inputs/InputDate"
import { Select } from "../Selects/Select"
import { TypeForm } from "../../models/SchemaForm";


export const Matricula = ()=>{
    const {values, errors, touched} = useFormikContext<TypeForm>();
    const serieAluno = ['1º Ano','2º Ano','3º Ano','4º Ano','5º Ano',];
    const ensinoAluno = ['Infantil', 'Fundamental']


    return (
        <fieldset className="fieldset flex flex-col gap-6">
            <legend>Matrícula</legend>

            <div className="flex gap-6">
                <div className="flex gap-6">
                    <Select name="serie" errors={errors.serie} optionList={serieAluno} 
                        touched={touched.serie} valueDisabled="Serie do Aluno"/>

                    <Select name="turma" errors={errors.turma} optionList={['A','B','C','D','E','F','G',]} 
                        touched={touched.turma} valueDisabled="Turma do Aluno"/>

                    <Select name="ensino" errors={errors.ensino} optionList={ensinoAluno} 
                        touched={touched.ensino} valueDisabled="Ensino"/>
                </div>

                <InputDate nome="dataMatricula" errors={errors.dataMatricula} 
                    touched={touched.dataMatricula} text="Data Matrícula"/>
            </div>

        </fieldset>
        
    )
}