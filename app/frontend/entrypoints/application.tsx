import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import './index.css'

import Layout from '@/layout/Layout'
import axios from 'axios'

const pages = import.meta.glob('../Pages/**/*.tsx')

async function resolvePage(name: string) {
  const page = pages[`../Pages/${name}.tsx`]
  if (!page) {
    throw new Error(
      `Unknown page ${name}. Is is located under Pages with tsx extension ?`
    )
  }

  const importedModule = page()
  const pageComponent = (await importedModule).default
  pageComponent.layout = (page) => <Layout>{page}</Layout>
  return pageComponent
}
createInertiaApp({
  resolve: resolvePage,
  setup({ el, App, props }) {
    const csrfToken = document.querySelector('meta[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    render(<App {...props} />, el)
  },
})
