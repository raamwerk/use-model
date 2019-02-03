import {useState} from 'react'

export default function useModel (value) {
  const [state, _setState] = useState(value)
  const setState = arg => _setState(arg.nativeEvent instanceof Event ? arg.target.value : arg)
  return [state, setState]
}
