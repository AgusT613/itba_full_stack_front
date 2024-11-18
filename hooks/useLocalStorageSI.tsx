import { useEffect, useState } from 'react'

export default function useLocalStorageSI(key, value) {
  const [state, setState] = useState()

  useEffect(() => {
    window.localStorage.setItem(key, value)
    const valueSaved = window.localStorage.getItem(key)
    setState(valueSaved)
  }, [state])

  return state
}
