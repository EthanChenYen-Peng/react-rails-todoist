import React from 'react'

export default function useFocus() {
  const ref = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    ref.current?.focus()
  }, [])
  return ref
}
