import React, {FC} from "react";
import { IproductReviews } from "@/types/interfaces";
import { RatingStars } from "./rating-starts";
import { cn } from "@/lib/utils";
interface Iprops {
  reviews: IproductReviews;
}

const ReviewsDetails: FC<Iprops> = ({ reviews }) => {
  const { pageInfo, reviewList } = reviews;
  console.log(reviewList);
  return (
  <div>
    <div className="flex items-center mb-2">
      <RatingStars rating={pageInfo.avgRating} />
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{pageInfo.avgRating}</p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
    </div>
    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{pageInfo.totalCount} global ratings</p>
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
      <article className="mt-6">
          <div className="flex items-center mb-4">
            <img className="w-10 h-10 me-4 rounded-full" src={reviewList[0].user.image} alt="" />
            <div className="font-medium dark:text-white">
                  <p>{reviewList[0].user.displayName} <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">added on {new Date(reviewList[0].createdAt).toDateString()}</time></p>
            </div>
          </div>
          <RatingStars rating={reviewList[0].rating} />
          <p className="mb-2 text-gray-500 dark:text-gray-400">{reviewList[0].review}</p>
          <aside>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
              <div className="flex items-center mt-3">
                  <a href="#" className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Helpful</a>
                  <a href="#" className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">Report abuse</a>
              </div>
          </aside>
      </article>
  </div>
  );
}
export default ReviewsDetails;