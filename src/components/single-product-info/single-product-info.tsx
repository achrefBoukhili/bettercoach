import React, { useEffect } from 'react'
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import useProductReviews from "@hooks/use-product-reviews";
import Markdown from 'react-markdown';
import ReviewsDetails from '@components/ui/reviews'
import ReviewForm from '@components/review-form';
interface Iprops {
  description: string;
  productID: string;
  slug: string;
}
const ProductInfo: React.FC<Iprops> = ({ description, productID }) => {

  return (
    <>
      <Tabs defaultValue="description" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="description">Details</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className='h-full'>
          <Markdown>{description}</Markdown>
        </TabsContent>
        <TabsContent value="reviews">
          <ReviewsDetails productID={productID}/>
          <ReviewForm productId={productID} />
        </TabsContent>
      </Tabs>
    </>
  )
}
export default ProductInfo;