# useModel()

## Overview

The useModel hook is a wrapper around React's useState hook. Its setter can be passed directly to form controls.

## Example

```javascript
function App () {

  const [name, setName] = useModel('Pete')

  return (
    <input type="text" value={name} onChange={setName} />
  )
}
```

When passed a non-event argument, useModel's setter functions the same as that of useState:

```javascript
<button onClick={() => setName('')}>Reset</button>
```
