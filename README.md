# useModel()

## Overview

The useModel hook is a wrapper around React's useState hook. Its setter can be passed directly to form controls.

## Example

```javascript
import React from 'react'
import useModel from 'use-model'

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

Select:
```javascript
const [fruit, setFruit] = useModel('Apple')
return (
  <select value={fruit} onChange={setFruit}>
    <option value="Apple">Apple</option>
    <option value="Orange">Orange</option>
    <option value="Banana">Banana</option>
  </select>
)
```

Checkbox:
```javascript
const [present, setPresent] = useModel(true)
return (
  <input type="checkbox" name="present" value="present" checked={present} onChange={setPresent} />
)
```

Radio:
```javascript
const [color, setColor] = useModel('Red')
return <>
  <input type="radio" name="color" value="Red" checked={color === 'Red'} onChange={setColor} />Red
  <input type="radio" name="color" value="Blue" checked={color === 'Blue'} onChange={setColor} />Blue
</>
```
