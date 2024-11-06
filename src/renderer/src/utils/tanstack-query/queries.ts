import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { queryClient } from "./queryClient";

// Hook para buscar o endereco via cep
export const useUf = () => {
  return useQuery({
    queryKey: ['uf'],  
    queryFn: () => window.api.getUF(),
  });
};

// Hook para buscar cidades de um estado específico
export const useCidades = (uf:string) => {
  return useQuery({
    queryKey: ['cidades', uf],  
    queryFn: () => window.api.getCidades(uf.toUpperCase().trim()),
    enabled: !!uf,  
  });
};

// Hook para buscar o endereco via cep
export const useEndereco = (cep:string) => {
  return useQuery({
    queryKey: ['endereco', cep],  
    queryFn: () => window.api.getEndereco(cep),
    enabled: !!cep,  
  });
};

// Invalidando posts com time Ifinite ou qualquer outro que quiser
export const invalidateCidades = ()=>{
  queryClient.invalidateQueries({
    queryKey: ['cidades']
  })
}