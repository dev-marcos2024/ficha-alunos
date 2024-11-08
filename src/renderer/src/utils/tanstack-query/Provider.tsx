import {QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { queryClient } from "./queryClient";

interface Props{
  children: ReactNode
}

//! Criando o provider

export const Providers = ({children}:Props)=>{
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}