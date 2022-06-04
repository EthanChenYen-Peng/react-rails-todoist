import React from 'react'
function Header() {
  return (
    <nav className="flex py-12 px-14">
      <div>Logo</div>
      <ul className="ml-auto flex gap-6">
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  )
}

export default Header
