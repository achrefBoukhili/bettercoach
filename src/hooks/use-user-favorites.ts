import { useQuery } from "@apollo/client";
import { GET_USER_FAVORITE_PRODUCTS } from "api/queries/queries";
import { useUserContext } from "contexts/UserContext";
import { access } from "fs";
import { useEffect, useState } from "react";
import type { IfavoriteProduct, Iproduct } from "types/interfaces";

const useUserFavorites = () => {
	const { user } = useUserContext();
	const [products, setProducts] = useState<Iproduct[]>();

	const { data, loading, error } = useQuery(GET_USER_FAVORITE_PRODUCTS, {
		variables: {
			userID: user.id,
		},
		context: {
			headers: {
				Authorization: user.jwtToken,
				accessToken: user.accessToken,
			},
		},
		fetchPolicy: "no-cache",
	});

	useEffect(() => {
		if (!loading && !error) {
			setProducts(data.favoriteProducts);
		}
	}, [loading]);

	return {
		loading,
		products,
	};
};

export default useUserFavorites;
