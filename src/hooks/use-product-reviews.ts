import { useUserContext } from "@/contexts/UserContext";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_REVIEWS } from "api/queries";
import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { IproductReviews } from "types/interfaces";

interface Iprops {
  productID: string;
}

const useProductReviews = ({ productID }: Iprops) => {
  const router = useRouter();
  const { user } = useUserContext();
  const [productReviews, setProductReviews] = useState<IproductReviews>();
  const { data, loading, error } = useQuery(GET_PRODUCT_REVIEWS, {
    variables: {
      productID: productID,
    },
  });

  useEffect(() => {
    if (!loading && !error) {
      if (data.getProductReviews) {
        setProductReviews(data.getProductReviews);
      }
    }
  }, [data,  loading, error]);
  console
  return {
    error,
    loading,
    productReviews,
  };
};

export default useProductReviews;