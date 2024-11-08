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
                    <InputText nome="nomeMae" placeholder="Digite o Nome" texto="Digite o Nome da Mãe"
                        tipo="text" errors={errors.nomeMae} touched={touched.nomeMae}
                    />
                </div>

                <div className="flex gap-6">
                    <div className="flex">
                        <InputText nome="dataNascimentoMae" placeholder="Data Nascimento" texto="Data de Nascimento"
                            tipo="date" errors={errors.dataNascimentoMae} touched={touched.dataNascimentoMae}
                        />
                    </div>

                    <div className="flex">
                        <InputText nome="rgMae" placeholder="Digite o Rg" texto="Digite o Rg da Mãe"
                        tipo="text" errors={errors.rgMae} touched={touched.rgMae}
                    />
                    </div>

                    <div className="flex">
                        <InputCpfMask nome="cpfMae" errors={errors.cpfMae}
                            touched={touched.cpfMae} valor={values.cpfMae}
                        />    
                    </div> 
                    <div className="flex">
                        <InputTelefoneMask nome="telefoneMae" valor={values.telefoneMae}
                        touched={touched.telefoneMae} errors={errors.telefoneMae}
                    />
                    </div>
                </div>

                <div className="flex max-w-2xl">
                    <InputText nome="emailMae" placeholder="Digite o email" texto="Digite o email da Mãe"
                        tipo="text" errors={errors.emailMae} touched={touched.emailMae}
                    />
                </div>
            </div>    

        </fieldset>
    )   
}

