import React from 'react'

import { useMyHook } from 'use-via-cep'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
