import React, {FC} from "react";
import { IproductReviews } from "@/types/interfaces";
import { cn } from "@/lib/utils";
interface Iprops {
  reviews: IproductReviews;
}

const ReviewsDetails: FC<Iprops> = ({ reviews }) => {
  return (
  <div>
    <div className="flex items-center mb-2">
      {Array.from({ length: 5 }).map((_, index) => {
        let color = ' text-gray-200'
        if (index < reviews.pageInfo.avgRating) {
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
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{reviews.pageInfo.avgRating}</p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
    </div>
    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{reviews.pageInfo.totalCount} global ratings</p>
      {reviews.pageInfo.ratingPercentage && Object.keys(reviews.pageInfo.ratingPercentage).map((key, index) => (
        <div key={index} className="flex items-center mt-4">
          <div className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
            {key} star
          </div>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-300 rounded"
              style={{
                  width: `${reviews.pageInfo.ratingPercentage[key as keyof typeof reviews.pageInfo.ratingPercentage]}%`,
              }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {reviews.pageInfo.ratingPercentage[key as keyof typeof reviews.pageInfo.ratingPercentage]}%
          </span>
        </div>
      ))}
  </div>
  );
}

export default ReviewsDetails;