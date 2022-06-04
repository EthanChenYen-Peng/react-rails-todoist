import Header from '@/components/Header'
import React from 'react'
import { usePage } from '@inertiajs/inertia-react'

function Layout({ children }: { children: React.ReactNode }) {
  const { user } = usePage().props
  return (
    <div className="h-full overflow-hidden bg-gray-200">
      <Header user={user} />
      {children}
    </div>
  )
}

export default Layout
