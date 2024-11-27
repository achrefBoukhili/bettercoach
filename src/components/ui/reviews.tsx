import React, {FC, useEffect} from "react";
import { IproductReviews } from "@/types/interfaces";
import { RatingStars } from "./rating-starts";
import { cn } from "@/lib/utils";
import useProductReviews from "@hooks/use-product-reviews";
import PersonReviews from "./person-reviews";
interface Iprops {
  productID: string;
}

const ReviewsDetails: FC<Iprops> = ({ productID }) => {
  const { productReviews, error, loading } = useProductReviews({productID});
  const [reviews, setReviews] = React.useState<IproductReviews>();
  useEffect(() => {
    setReviews(productReviews);
  }, [productReviews, error, loading]);

  if(loading)return <div>loading</div>
  if (error) return <div>error</div>

  return (
  <div>
    <div className="flex items-center mb-2">
        <RatingStars rating={reviews?.pageInfo?.avgRating || 0} />
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{reviews?.pageInfo?.avgRating}</p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
    </div>
    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{reviews?.pageInfo?.totalCount} global ratings</p>
      <div className="border-b border-gray-200 dark:border-gray-700 pb-10 mb-15">
      {reviews?.pageInfo.ratingPercentage && Object.keys(reviews?.pageInfo?.ratingPercentage || {}).map((key, index) => (
        <div key={index} className="flex items-center mt-4">
          <div className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
            {key} star
          </div>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-yellow-300 rounded"
              style={{
                  width: `${reviews?.pageInfo?.ratingPercentage[key] || 0}%`,
              }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {Number(reviews?.pageInfo?.ratingPercentage[key]).toFixed()|| 0}%
          </span>
        </div>
      ))}
      </div>
      {reviews?.reviewList.length > 0 &&
        reviews?.reviewList.map((review, index) => (
          <PersonReviews key={index} {...review} />
        ))}
  </div>
  );
}

export default ReviewsDetails;