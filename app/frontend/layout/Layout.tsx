import Header from '@/components/Header'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full overflow-hidden bg-gray-200">
      <Header />
      {children}
    </div>
  )
}

export default Layout
