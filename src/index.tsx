import * as React from 'react';
import { Address, EmptyValue, Error, UseViaCepReturn } from './types'

export const useViaCep = (initialCep = '') : UseViaCepReturn => {
  const [cep, setCep] = React.useState<string>(initialCep)
  const [data, setData] = React.useState<Address | EmptyValue | Error>({})

  React.useEffect(() => {
    const regexedCep = cep.replace(/\D/g, '')
    if (regexedCep.length !== 8) {
      setData({})
      return
    }

    fetch(`https://viacep.com.br/ws/${regexedCep}/json`).then(resp => resp.json()).then(data => setData(data))
  }, [cep])

  return { cep, data, setCep }
}
