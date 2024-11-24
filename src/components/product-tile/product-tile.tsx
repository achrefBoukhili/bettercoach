import type React from 'react'
import Link from 'next/link';
import type { Iproduct } from 'types/interfaces';
import { cn, toTitleCase } from '@/lib/utils'
import { array } from 'yup/lib/locale';
interface Iprops {
  product: Iproduct
}

const ProductTile: React.FC<Iprops> = ({ product: {id, title,description,averageRating, images, price, slug }}) => {
  return (
    <div className="w-full max-w-sm max-h-px-550 h-120 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/product/${slug}`}>
        <div style={{ height: '285px' }}>
          <img
            className="rounded-t-lg object-cover w-full h-full"

            src={images[1]?.secure_url || (images[0] && images[0].secure_url)}
            alt="product"
          />
        </div>
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {toTitleCase(slug)}
          </h5>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {Array.from({ length: 5 }).map((_, index) => {
                let color = ' text-gray-200'
                if (index < averageRating) {
                  color = 'text-yellow-300'
                }
                return (
                  <div key={index}>
                    <svg
                      className={cn('w-4 h-4', color)}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                )
              })}
            </div>
            {averageRating && (
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {Number.parseFloat(averageRating).toFixed(1)}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {price[0]}€
            </span>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductTile