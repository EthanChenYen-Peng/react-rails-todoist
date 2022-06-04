import React from 'react'
import { Link } from '@inertiajs/inertia-react'
function Header() {
  return (
    <nav className="flex  bg-primary py-12 px-14 text-gray-50">
      <div>Logo</div>
      <ul className="ml-auto flex gap-6">
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
