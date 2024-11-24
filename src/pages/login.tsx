import type { NextPage } from 'next'
import Link from 'next/link'
import { LoginForm } from 'components'

const login: NextPage = () => {
  return (
    <div className="login-register-container">
      <div className="relative">
        <Link href="/">
          <div className="login-register-page-link">
            Shopping
          </div>
        </Link>
        <div className="login-register-box">
          <h1 className="login-register-title">
            Login
          </h1>
          <LoginForm />
          <Link href="/register">
            <div>Don&apos;t have an account? <span className="font-semibold">Register</span></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default login
