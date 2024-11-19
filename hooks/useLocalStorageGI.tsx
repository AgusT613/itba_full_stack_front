import { useEffect, useState } from 'react'

export default function useLocalStorageGI(key) {
  const [state, setState] = useState<string>()

  useEffect(() => {
    const localStorageValue = window.localStorage.getItem(key)
    setState(localStorageValue)
  }, [state])

  return state
}
