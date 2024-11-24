import React from 'react'
import useSearchInput from './search-input-hook'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline'
import { Formik, Field, Form } from 'formik'

const SearchInput: React.FC = () => {
  const { handleSubmit, initialValues } = useSearchInput()

  return (
    <div className="flex flex-row items-center justify-center w-full p-1 border-2 rounded-lg lg:p-0 lg:border-0 lg:w-1/3">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form className="inline-flex w-full">
          <button type="submit">
            <MagnifyingGlassCircleIcon
              strokeWidth={1.7}
              className="w-5 h-5 text-gray-400 sm:w-6 sm:h-6"
            />
          </button>
          <Field
            type="text"
            name="searchPhrase"
            placeholder="Search for products"
            className="w-full p-1 mx-1 text-sm font-normal lg:border-b sm:text-base focus:outline-none lg:focus:border-b-2 focus:border-gray-300"
          />
        </Form>
      </Formik>
    </div>
  )
}

export default SearchInput
