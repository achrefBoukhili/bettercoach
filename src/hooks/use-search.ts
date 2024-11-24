import { useQuery } from "@apollo/client";
import { SEARCH_HOME_PRODUCTS } from "api/queries";
import { useEffect, useState } from "react";
import type { Iproduct, IproductAttributes } from "types/interfaces";

interface Iprops {
	queryPhrase: string;
}

const useSearch = ({ queryPhrase }: Iprops) => {
	const [products, setProducts] = useState<Iproduct[]>();

	const { data, loading } = useQuery(SEARCH_HOME_PRODUCTS, {
		variables: {
			search: queryPhrase,
		},
	});
	useEffect(() => {
		if (!loading) {
			if (data.searchHomeProducts.length > 0) {
				setProducts(data.searchHomeProducts);
			}
		}
	}, [loading, queryPhrase]);
	return {
		loading,
		products,
	};
};

export default useSearch;
