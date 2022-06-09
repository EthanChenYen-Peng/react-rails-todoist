import React from 'react'

export default function useOutsideClick<T extends HTMLElement = HTMLElement>(
  callback: () => void
) {
  const ref = React.useRef<T>(null)

  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      const targetElement = e.target as HTMLElement
      if (ref.current) {
        const refElement = ref.current

        if (!refElement.contains(targetElement)) {
          callback()
        }
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [callback])

  return ref
}
