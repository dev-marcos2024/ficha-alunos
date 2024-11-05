import * as Yup from 'yup';


// Definindo o esquema de validação com Yup
export const AlunoSchema = Yup.object().shape({
  rm: Yup.string().required('RM é obrigatório'),
  ra: Yup.string().length(4, 'RA deve ter exatamente 4 caracteres').required('RA é obrigatório'),
  alunoNome: Yup.string().required('Nome é obrigatório'),
  alunoRg: Yup.boolean()
});

// Tipagem gerada a partir do schema
export const InitialDateForm = {
  rm: '',
  ra: '',
  alunoNome: '',
  alunoRg: true
};


export type TypeForm = typeof InitialDateForm;





