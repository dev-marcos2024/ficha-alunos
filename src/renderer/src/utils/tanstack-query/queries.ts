import { useQuery } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { Municipio } from '../../../../types/TypeMunicipio'

// Hook para buscar o endereco via cep
export const useUf = () => {
  return useQuery({
    queryKey: ['uf'],  
    queryFn: () => window.api.getUF(),
  });
};

// Hook para buscar cidades de um estado específico
async function handleCidade(uf: string):Promise<Municipio[]>{
  const data = await window.api.getCidades(uf.toUpperCase().trim())
  return data.map((item: Municipio) => item.nome)
}

export const useCidades = (uf:string) => {
  return useQuery({
    queryKey: ['cidades', uf],  
    queryFn: async (): Promise<Municipio[]> => await handleCidade(uf),
    enabled: !!uf,  
  });
};

// Hook para buscar o endereco via cep
export const useEndereco = (cep:string) => {
  return useQuery({
    queryKey: ['endereco', cep],  
    queryFn: (): Promise<ViaCepResponse> => window.api.getEndereco(cep),
    enabled: !!cep,  
  });
};

// Invalidando posts com time Ifinite ou qualquer outro que quiser
export const invalidateCidades = ()=>{
  queryClient.invalidateQueries({
    queryKey: ['cidades']
  })
}