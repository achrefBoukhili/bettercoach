import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_OF_CATEGORY } from "api/queries/queries";
import { useEffect, useState } from "react";
import type { Iproduct, IproductAttributes } from "types/interfaces";

interface Iprops {
	slug: string;
}

const useCategory = ({ slug }: Iprops) => {
	const [products, setProducts] = useState<Iproduct[]>();

	const { data, loading } = useQuery(GET_PRODUCTS_OF_CATEGORY, {
		variables: {
			categorySlug: slug,
		},
	});

	useEffect(() => {
		if (!loading) {
			const dataProducts: Iproduct[] =
				data.categories.data[0].attributes.products.data.map(
					(product: IproductAttributes) => {
						return product.attributes;
					},
				);

			setProducts(dataProducts);
		}
	}, [loading, slug]);

	return {
		loading,
		products,
	};
};

export default useCategory;
