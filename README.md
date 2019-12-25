# use-via-cep

> Hook to abstract the logic to call viacep

[![NPM](https://img.shields.io/npm/v/use-via-cep.svg)](https://www.npmjs.com/package/use-via-cep) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-via-cep
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-via-cep'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [lucasfloriani](https://github.com/lucasfloriani)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
