import React from 'react'
import { Formik, Field, Form } from 'formik'
import useLoginForm from './login-form.hook'

const LoginForm: React.FC = () => {
  const { formInitialValues, handleSubmit, loginSchema } = useLoginForm()

  return (
    <div>
      <Formik
        initialValues={formInitialValues}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={loginSchema}
      >
        {({ errors, touched }) => (
          <Form className="login-register-form">
            <Field
              className="login-register-input"
              name="email"
              type="email"
              placeholder="E-mail"
            />
            {errors.email && touched.email ? <div className='login-register-validation-text'>{errors.email}</div> : null}
            <Field
              className="login-register-input"
              name="password"
              type="password"
              placeholder="Password"
            />
            {errors.password && touched.password ? <div className='login-register-validation-text'>{errors.password}</div> : null}
            <button type="submit" className="login-register-button">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm;