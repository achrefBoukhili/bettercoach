import type { NextPage } from 'next'
import Link from 'next/link'
import { RegisterForm } from 'components'

const register: NextPage = () => {
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
            Register
          </h1>
          <RegisterForm />
          <Link href="/login">
            <div>Already have an account? <span className="font-semibold">Login</span></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default register
