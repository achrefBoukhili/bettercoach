import React from 'react'
import { ChevronDownIcon, HeartIcon } from '@heroicons/react/outline'
import useSingleProductForm from './single-product-form.hook'
import { Formik, Field, Form } from 'formik'
import { IsingleProductFormValues } from 'types/interfaces'
import { useUserContext } from 'contexts/UserContext'

interface Iprops {
  price: number
  id: string
}

const SingleProductForm: React.FC<Iprops> = ({ price, id }) => {
  const { initialValues, validationSchema, handleSubmit } = useSingleProductForm()
  const { toggleFavoriteProduct, userFavoriteProducts } = useUserContext()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: IsingleProductFormValues) => handleSubmit(values)}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100">
            <div className="flex items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <Field
                  as="select"
                  name="size"
                  className={`py-2 pl-3 pr-10 text-base border ${
                    errors.size && touched.size
                      ? 'border-red-400 border-2'
                      : 'border-gray-300'
                  } rounded appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500`}
                >
                  <option disabled hidden value="">
                    -
                  </option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </Field>
                <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                  <ChevronDownIcon className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col align-center sm:flex-row sm:justify-between">
            <span className="text-2xl font-medium text-gray-900 title-font">
              ${price}
            </span>
            <div className='flex flex-row mt-2 sm:mt-0'>
              <button
                type="submit"
                className="default-button"
              >
                Add to cart
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 transition-all bg-gray-200 border-0 rounded-full hover:bg-gray-300"
                onClick={() => toggleFavoriteProduct(id)}
              >
                <HeartIcon className={`w-6 h-6 ${ userFavoriteProducts.includes(id) ? 'fill-red-500 stroke-red-600 stroke-1' : 'fill-gray-500' }`} />
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SingleProductForm
