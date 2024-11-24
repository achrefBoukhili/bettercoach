import useCategory from "@hooks/use-category";
import client from "api/apollo-client";
import { GET_CATEGORIES_SLUG, GET_CATEGORY_BY_SLUG } from "api/queries/queries";
import { Layout, ProductTile } from "components";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Icategory, IcategorytAttributes } from "types/interfaces";
import { getDefaultCategoriesLinks } from "utils";

interface Iprops {
	category: Icategory;
	defaultCategoriesLinks: Icategory[];
}

const CategoryPage: NextPage<Iprops> = ({
	category,
	defaultCategoriesLinks,
}) => {
	const { loading, products } = useCategory(category);

	const productMap = products?.map((product) => {
		return <ProductTile key={product.slug} product={product} />;
	});

	return (
		<Layout
			headerTitle={`${category.emoji} ${category.title}`}
			links={defaultCategoriesLinks}
		>
			<div>
				{loading ? (
					"Loading"
				) : (
					<div className="bg-white">
						<div className="max-w-2xl mx-auto lg:max-w-7xl">
							<div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
								{productMap}
							</div>
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await client.query({
		query: GET_CATEGORIES_SLUG,
	});

	const categories: Icategory[] = data.categories.data.map(
		(category: IcategorytAttributes) => {
			return category.attributes;
		},
	);

	const paths = categories.map(({ slug }) => ({
		params: {
			slug: slug ? slug : "/",
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data } = await client.query({
		query: GET_CATEGORY_BY_SLUG,
		variables: {
			slug: params?.slug,
		},
	});

	const category: Icategory = data.categories.data[0].attributes;
	const defaultCategoriesLinks = await getDefaultCategoriesLinks();

	return {
		props: {
			category,
			defaultCategoriesLinks,
		},
	};
};
