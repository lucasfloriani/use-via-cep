export type EmptyValue = {}

export type Address = {
  cep: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade: string;
  uf: string;
  unidade?: string;
  ibge: string;
  gia?: string;
}

export type Error = {
  erro: boolean;
}

export type UseViaCepReturn = {
  cep: string;
  data: Address | EmptyValue | Error;
  setCep: (cep: string) => void;
}
