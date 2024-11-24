import React from 'react'
import { Formik, Field, Form } from 'formik'
import useRegisterForm from './register-form.hook'

const RegisterForm: React.FC = () => {
  const { formInitialValues, handleSubmit, registerSchema } = useRegisterForm()

  return (
    <div>
      <Formik
        initialValues={formInitialValues}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={registerSchema}
      >
        {({ errors, touched }) => (
          <Form className="login-register-form">
            <Field
              className="login-register-input"
              name="name"
              type="name"
              placeholder="Name"
            />
            {errors.name && touched.name ? <div className='login-register-validation-text'>{errors.name}</div> : null}
            <Field
              className="login-register-input"
              name="surname"
              type="surname"
              placeholder="Surname"
              />
            {errors.surname && touched.surname ? <div className='login-register-validation-text'>{errors.surname}</div> : null}
            <Field
              className="login-register-input"
              name="email"
              type="email"
              placeholder="Email adress"
              />
            {errors.email && touched.email ? <div className='login-register-validation-text'>{errors.email}</div> : null}
            <Field
              className="login-register-input"
              name="password"
              type="password"
              placeholder="Password"
              />
            {errors.password && touched.password ? <div className='login-register-validation-text'>{errors.password}</div> : null}
            <button type="submit" className="login-register-button">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterForm