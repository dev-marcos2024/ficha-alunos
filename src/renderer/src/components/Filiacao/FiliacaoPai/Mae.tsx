import { useFormikContext } from "formik";
import { TypeForm } from "../../../models/SchemaForm";
import { InputCpfMask } from "../../Inputs/InputsMask/InputMaskCpf";
import { InputText } from "../../Inputs/InputText";
import { InputTelefoneMask } from "../../Inputs/InputsMask/InputMaskTelefone";



export const FiliacaoMae = () => {
    const {values, errors, touched} = useFormikContext<TypeForm>();


    return (
        <fieldset className="">
            <legend className="legendAxiliar">Mãe</legend>

            <div className="flex flex-col gap-6">
                <div className="flex">
                    <InputText nome="nomePai" placeholder="Digite o Nome" texto="Digite o Nome do Pai"
                        tipo="text" errors={errors.nomePai} touched={touched.nomePai}
                    />
                </div>

                <div className="flex gap-6">
                    <div className="flex">
                        <InputText nome="dataNascimentoPai" placeholder="Data Nascimento" texto="Data de Nascimento"
                            tipo="date" errors={errors.nomePai} touched={touched.nomePai}
                        />
                    </div>

                    <div className="flex">
                        <InputText nome="rgPai" placeholder="Digite o Rg" texto="Digite o Rg do Pai"
                        tipo="text" errors={errors.nomePai} touched={touched.nomePai}
                    />
                    </div>

                    <div className="flex">
                        <InputCpfMask nome="cpfPai" errors={errors.cpfPai} 
                            touched={touched.cpfPai} valor={values.cpfPai}
                        />    
                    </div> 
                    <div className="flex">
                        <InputTelefoneMask nome="telefonePai" valor={values.telefonePai} 
                        touched={touched.telefonePai} errors={errors.telefonePai}
                    />
                    </div>
                </div>

                <div className="flex max-w-2xl">
                    <InputText nome="emailPai" placeholder="Digite o email" texto="Digite o email do Pai"
                        tipo="text" errors={errors.nomePai} touched={touched.nomePai}
                    />
                </div>
            </div>    

        </fieldset>
    )   
}

