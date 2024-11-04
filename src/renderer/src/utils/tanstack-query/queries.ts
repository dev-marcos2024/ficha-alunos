import { useQuery } from "@tanstack/react-query";
import { queryClient } from "./queryClient";

// Hook para buscar o endereco via cep
export const useUf = () => {
  return useQuery({
    queryKey: ['uf'],  // Inclua o código do estado na chave da query
    queryFn: () => window.api.getUF(),
  });
};

// Hook para buscar cidades de um estado específico
export const useCidades = (uf:string) => {
  return useQuery({
    queryKey: ['cidades', uf],  // Inclua o código do estado na chave da query
    queryFn: () => window.api.getCidades(uf),
    enabled: !!uf,  // Só executa a query se `uf` estiver definido
  });
};

// Hook para buscar o endereco via cep
export const useEndereco = (cep:string) => {
  return useQuery({
    queryKey: ['endereco', cep],  // Inclua o código do estado na chave da query
    queryFn: () => window.api.getEndereco(cep),
    enabled: !!cep,  // Só executa a query se `uf` estiver definido
  });
};

// Invalidando posts com time Ifinite ou qualquer outro que quiser
export const invalidateCidades = ()=>{
  queryClient.invalidateQueries({
    queryKey: ['cidades']
  })
}