import Header from '@/components/Header'
import React from 'react'
import { usePage } from '@inertiajs/inertia-react'

function Layout({ children }: { children: React.ReactNode }) {
  const { user } = usePage().props
  return (
    <div className="h-full overflow-x-auto bg-gray-50 pb-20">
      <Header user={user} />
      {children}
    </div>
  )
}

export default Layout
