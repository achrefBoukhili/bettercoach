import client from "api/apollo-client";
import { GET_CATEGORIES } from "api/queries";
import type { Icategory } from "types/interfaces";

export const onlyFirstLetterUppercase = (text: string) => {
	return text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
};

export const getDefaultCategoriesLinks = async () => {
	const { data } = await client.query({
		query: GET_CATEGORIES,
	});
	const defaultCategoriesLinks: Icategory[] = data.getMainCategories.map(
		(element: Icategory) => {
			return element;
		},
	);

	return defaultCategoriesLinks;
};
