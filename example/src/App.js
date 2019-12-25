import React from 'react'

import { useViaCep } from 'use-via-cep'

const App = () => {
  const { cep, data, setCep } = useViaCep()

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexFlow: 'column',
        height: '100vh',
        justifyContent: 'center',
        width: '100vw',
      }}
    >
      <input value={cep} onChange={({ target }) => setCep(target.value)} />
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}

export default App
