import { useUserContext } from "@/contexts/UserContext";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_SLUG } from "api/queries";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Iproduct } from "types/interfaces";

interface Iprops {
  slug: string
}

const useProduct = ({ slug }:Iprops) => {
  const router = useRouter()
  const { user } = useUserContext();
  const [product, setProduct] = useState<Iproduct>();
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_SLUG, {
    variables: {
      slug: slug,
    },
  });

  useEffect(() => {
    if (!user?.isLogged) router.push("/login");
  }, [user]);

  useEffect(() => {
    if (!loading && !error) {
      if (data.getProductBySlug) {
        setProduct(data.getProductBySlug);
      }
    }
  }, [loading, slug]);

  return {
    error,
    loading,
    product
  }
}

export default useProduct;