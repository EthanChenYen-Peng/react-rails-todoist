import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import Logo from '../images/logo.png'

function PublicHeader() {
  return (
    <div className="mx-auto mt-8 flex w-7/12 items-center">
      <Link href="/">
        <div className="flex items-center gap-2">
          <div className="h-14 w-14">
            <img src={Logo} className="rounded-lg" />
          </div>
          <h2 className="text-3xl font-semibold text-primary">todoist</h2>
        </div>
      </Link>
      <ul className="ml-auto flex items-center gap-4">
        <li className="cursor-pointer rounded-lg px-2 py-2 text-xl text-gray-500 transition-colors hover:bg-gray-200">
          <Link href="/login">Log in</Link>
        </li>
        <li className="cursor-pointer rounded-lg bg-primary px-2 py-2 text-xl text-white transition-colors hover:bg-red-400">
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </div>
  )
}

export default PublicHeader
