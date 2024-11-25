import { Suspense } from "react";
import useProduct from "@hooks/use-product";
import useProductReviews from "@hooks/use-product-reviews";
import client from "api/apollo-client";import {
  GET_PRODUCTS_SLUG,
  GET_PRODUCT_BY_SLUG,
} from 'api/queries'
import { Layout, ProductDetails, ProductSkeleton } from "components";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import type { Icategory, Iproduct} from "types/interfaces";
import { getDefaultCategoriesLinks } from "utils";

interface Iprops {
	defaultCategoriesLinks: Icategory[];
}

const Product: NextPage<Iprops> = ({ defaultCategoriesLinks }) => {
	const router = useRouter();
	const slugAsString = String(router.query.slug);
	// const { product, loading, error } = useProduct({ slug: slugAsString })
  // const { productReviews, loading: loadingProducts } = useProductReviews({productID: product.id});
	return (
		<Layout links={defaultCategoriesLinks}>
      <Suspense fallback={<ProductSkeleton numberOfSkeletons={1} />}>
        <ProductDetails slug={slugAsString} />
      </Suspense>
		</Layout>
	);
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_PRODUCTS_SLUG,
  })
  const paths = data.getLandingProducts.products.map(({ slug }: { slug: string }) => ({
    params: {
      slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: GET_PRODUCT_BY_SLUG,
    variables: {
      slug: params?.slug,
    },
  })
	const product: Iproduct = data.getProductBySlug
  const defaultCategoriesLinks = await getDefaultCategoriesLinks()
	return {
    props: {
      product,
      ...defaultCategoriesLinks,
    },
  }
};
