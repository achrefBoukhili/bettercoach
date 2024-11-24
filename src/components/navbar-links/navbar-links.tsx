import React from 'react'
import Link from 'next/link'
import { useUserContext } from 'contexts/UserContext'

const NavbarLinks: React.FC = () => {
  const { user, logout } = useUserContext()

  return (
    <>
      {
        user.isLogged ? (
          <>
            <Link href="/user-account">
              <div className="my-3">My account</div>
            </Link>
            <Link href="/user-orders">
              <div className="my-3">My orders</div>
            </Link>
            <Link href="/user-favorites">
              <div className="my-3">Favorites</div>
            </Link>
            <button onClick={logout} className="my-3">Logout</button>
          </>
        ) : (
          <>
            <Link href="/login">
              <div className="my-3">Login</div>
            </Link>
            <Link href="/register">
              <div className="my-3">Register</div>
            </Link>
          </>
        )
      }
    </>
  )
}

export default NavbarLinks
