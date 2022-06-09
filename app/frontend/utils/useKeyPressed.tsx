import React from 'react'

export default function useKeyPressed(key: string): boolean {
  const [pressed, setPressed] = React.useState(false)

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === key) {
      setPressed(true)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === key) {
      setPressed(false)
    }
  }
  React.useEffect(() => {
    document.addEventListener('keyup', handleKeyUp)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keyup', handleKeyUp)
      document.removeEventListener('keydown', handleKeyDown)
    }
  })
  return pressed
}
