import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_LANDING_PRODUCTS } from "api/queries";
import type { Iproduct, IproductAttributes } from "types/interfaces";
const useLandingProducts = () => {
	const { data, loading, error } = useQuery(GET_LANDING_PRODUCTS);
	const [products, setProducts] = useState<Iproduct[]>([]);

	if (error) throw new Error(error.message);
  useEffect(() => {
    if (!loading && !error) {
      if (data.getLandingProducts.products.length > 0) {
        setProducts(data.getLandingProducts.products);
      }
    }
  }, [loading, data, error]);

	return {
		products,
		loading,
		error,
	};
};

export  {useLandingProducts};
