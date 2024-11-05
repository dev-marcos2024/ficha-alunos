import React, { createContext, useContext, ReactNode } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlunoInfo, alunoSchema } from "../../../types/SchemaForm";

// Defina o tipo do contexto
interface FormContextType extends UseFormReturn<AlunoInfo> {}

// Crie o contexto
const FormContext = createContext<FormContextType | undefined>(undefined);

// Componente Provider
export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const methods = useForm<AlunoInfo>({
    resolver: zodResolver(alunoSchema),
  });

  return (
    <FormContext.Provider value={methods}>
      {children}
    </FormContext.Provider>
  );
};

// Hook para acessar o contexto do formulário
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
