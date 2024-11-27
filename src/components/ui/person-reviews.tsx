import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { RatingStars } from "./rating-starts";
import {FC}  from 'react'
interface Iprops {
    createdAt: string;
    rating: number;
    user: any;
    review: any;
}
const PersonReviews: FC<Iprops> = (review) => {
    console.log(review);
    return (
        <article className="mt-6 border-b border-gray-200 dark:border-gray-700 mb-5">
          <div className="flex items-center mb-4">
            <img className="w-10 h-10 me-4 rounded-full" src={review.user.image} alt="" />
            <div className="font-medium dark:text-white">
                  <p>{review?.user?.displayName} <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">added on {new Date(review.createdAt || '').toDateString()}</time></p>
            </div>
          </div>
        <RatingStars rating={review.rating || 0} />
          <p className="mb-2 text-gray-500 dark:text-gray-400">{review.review}</p>
      </article>
    );
}

export default PersonReviews;