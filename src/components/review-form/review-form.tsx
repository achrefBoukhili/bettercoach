import React, {useState} from 'react'
import { Formik, Field, Form } from 'formik'
import useReviewForm from './review-form.hook'
import { Rating } from 'react-simple-star-rating'

interface Iprops {
  product: string
}
const ReviewForm: React.FC<Iprops> = ({product}) => {
  const { formInitialValues, handleSubmit, reviewSchema } = useReviewForm()
  const [rating, setRating] = useState(0)

  const handleRating = (rate: number) => {
    setRating(rate)
  }
  return (
    <div className='flex flex-col gap-4'>
      <Formik
        initialValues={formInitialValues}
        onSubmit={(values) => handleSubmit({ ...values, product })}
        validationSchema={reviewSchema}
      >
        {({ errors, touched }) => (
          <Form className="login-register-form">
            <label htmlFor="comment" className="text-xs mb-15">By submitting your review you agree that it will be public and associated with your account</label>
            <Field
              className="block p-2.5 w-full min-h-20 mb-5 text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="review"
              component="textarea"
              rows="4"
              placeholder="share your experience"
            />
            <button type="submit" className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Review</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ReviewForm;