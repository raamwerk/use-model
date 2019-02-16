import {useState} from 'react'

export default function useModel (value) {
  const [state, _setState] = useState(value)
  function setState (arg) {
    if (arg instanceof Event || arg.nativeEvent instanceof Event) {
      if (arg.target.type === 'checkbox') {
        _setState(arg.target.checked)
      } else if (arg.target.type === 'radio') {
        if (arg.target.checked) _setState(arg.target.value)
      } else {
        _setState(arg.target.value)
      }
    } else {
      _setState(arg)
    }
  }
  return [state, setState]
}
