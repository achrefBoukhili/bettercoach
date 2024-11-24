import { useQuery } from "@apollo/client";
import { GET_USER_FAVORITE_PRODUCTS } from "api/queries/queries";
import { useUserContext } from "contexts/UserContext";
import { useEffect, useState } from "react";
import type { IfavoriteProduct, Iproduct } from "types/interfaces";

const useUserFavorites = () => {
	const { user } = useUserContext();
	const [products, setProducts] = useState<Iproduct[]>();

	const { data, loading } = useQuery(GET_USER_FAVORITE_PRODUCTS, {
		variables: {
			userID: user.id,
		},
		context: {
			headers: {
				Authorization: `Bearer ${user.jwtToken}`,
			},
		},
		fetchPolicy: "no-cache",
	});

	useEffect(() => {
		if (!loading) {
			const dataProducts: Iproduct[] = data.favoriteProducts.data.map(
				(favoriteProduct: IfavoriteProduct) => {
					return favoriteProduct.attributes.product.data.attributes;
				},
			);

			setProducts(dataProducts);
		}
	}, [loading]);

	return {
		loading,
		products,
	};
};

export default useUserFavorites;
