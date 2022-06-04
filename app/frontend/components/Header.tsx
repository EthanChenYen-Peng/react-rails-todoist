import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import Logo from '../images/logo.png'

interface Props {
  user?: {
    username: string
  }
}
function Header({ user }: Props) {
  return (
    <nav className="flex items-center py-7 text-xl bg-primary px-14 text-gray-50">
      <div className="w-10 h-10">
        <img src={Logo} className="rounded-lg" />
      </div>
      <ul className="flex ml-auto gap-6">
        {user ? (
          <>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/logout" method="delete">
                Logout
              </Link>
            </li>
          </>
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
