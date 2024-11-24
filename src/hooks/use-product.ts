import { useUserContext } from "@/contexts/UserContext";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_SLUG } from "api/queries/queries";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Iproduct } from "types/interfaces";

interface Iprops {
  slug: string
}

const useProduct = ({ slug }:Iprops) => {
  const router = useRouter()
  const [product, setProduct] = useState<Iproduct>();
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_SLUG, {
    variables: {
      slug
    },
  });

  useEffect(() => {
    if(!loading && !error) {
      if(data.products.data.length > 0) {

        const { id, attributes } = data.products.data[0]
        const dataProduct:Iproduct = {
          id,
          ...attributes
        }

        setProduct(dataProduct)
      }
      else router.push('/')
    }
  }, [loading, slug]);

  return {
    error,
    loading,
    product
  }
}

export default useProduct;