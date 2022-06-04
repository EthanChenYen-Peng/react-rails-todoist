import React from 'react'
import { Link } from '@inertiajs/inertia-react'

interface Props {
  user?: {
    username: string
  }
}
function Header({ user }: Props) {
  return (
    <nav className="flex bg-primary py-12 px-14 text-gray-50">
      <div>Logo</div>
      <ul className="ml-auto flex gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        {user ? (
          <li>
            <Link href="/logout" method='delete'>Logout</Link>
          </li>
        ) : (
          <>
            <li>
              <Link href="/register">Register</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </>
        )}
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
