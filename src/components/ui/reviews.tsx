import React, {FC} from "react";
import { IproductReviews } from "@/types/interfaces";
import { RatingStars } from "./rating-starts";
import { cn } from "@/lib/utils";
interface Iprops {
  reviews: IproductReviews;
}

const ReviewsDetails: FC<Iprops> = ({ reviews }) => {
  const { pageInfo, reviewList } = reviews;
  return (
  <div>
    <div className="flex items-center mb-2">
      <RatingStars rating={pageInfo.avgRating} />
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{pageInfo.avgRating}</p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
    </div>
    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{pageInfo.totalCount} global ratings</p>
      <div className="border-b border-gray-200 dark:border-gray-700 pb-10 mb-15">
      {pageInfo.ratingPercentage && Object.keys(pageInfo.ratingPercentage).map((key, index) => (
        <div key={index} className="flex items-center mt-4">
          <div className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
            {key} star
          </div>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-300 rounded"
              style={{
                  width: `${pageInfo.ratingPercentage[key as keyof typeof pageInfo.ratingPercentage]}%`,
              }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {pageInfo.ratingPercentage[key as keyof typeof pageInfo.ratingPercentage]}%
          </span>
        </div>
      ))}
      </div>
      {reviewList.length > 0 && <article className="mt-6 border-b border-gray-200 dark:border-gray-700 mb-5">
          <div className="flex items-center mb-4">
            <img className="w-10 h-10 me-4 rounded-full" src={reviewList[0].user.image} alt="" />
            <div className="font-medium dark:text-white">
                  <p>{reviewList[0].user.displayName} <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">added on {new Date(reviewList[0].createdAt).toDateString()}</time></p>
            </div>
          </div>
          <RatingStars rating={reviewList[0].rating} />
          <p className="mb-2 text-gray-500 dark:text-gray-400">{reviewList[0].review}</p>
      </article>}
  </div>
  );
}

export default ReviewsDetails;