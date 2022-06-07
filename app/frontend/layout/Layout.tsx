import Header from '@/components/Header'
import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import PublicHeader from '@/components/PublicHeader'

function Layout({ children }: { children: React.ReactNode }) {
  const { user } = usePage().props
  return (
    <div className="h-full overflow-x-auto bg-gray-50 pb-20">
      {user ? <Header user={user} /> : <PublicHeader />}
      {children}
    </div>
  )
}

export default Layout
