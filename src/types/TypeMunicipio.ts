export type Municipio = {
    id: number;
    nome: string;
    microrregiao: {
      id: number;
      nome: string;
      mesorregiao: {
        id: number;
        nome: string;
        uf: {
          id: number;
          sigla: string;
          nome: string;
          regiao: {
            id: number;
            sigla: string;
            nome: string;
          };
        };
      };
    };
  };
  

  