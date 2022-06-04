import React from 'react'
import { Link } from '@inertiajs/inertia-react'
function Header() {
  return (
    <nav className="flex py-12 px-14">
      <div>Logo</div>
      <ul className="ml-auto flex gap-6">
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
