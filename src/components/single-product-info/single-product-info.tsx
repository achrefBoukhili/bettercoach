import React from 'react'
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import useProductReviews from "@hooks/use-product-reviews";
import Markdown from 'react-markdown';
import ReviewsDetails from '@components/ui/reviews'

interface Iprops {
  description: string;
  productID: string;
}
const ProductInfo: React.FC<Iprops> = ({ description, productID }) => {
  const { productReviews, loading: loadingProducts } = useProductReviews({productID});

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
          {productReviews && <ReviewsDetails reviews={productReviews} />}
        </TabsContent>
      </Tabs>
    </>
  )
}
export default ProductInfo;