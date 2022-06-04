import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import './index.css'
const pages = import.meta.glob('../Pages/**/*.tsx')

async function resolvePage(name: string) {
  const page = pages[`../Pages/${name}.tsx`]
  if (!page) {
    throw new Error(
      `Unknown page ${name}. Is is located under Pages with tsx extension ?`
    )
  }
  const content = await page()
  return content.default
}
createInertiaApp({
  resolve: resolvePage,
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})
