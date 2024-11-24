import { useUserContext } from "@/contexts/UserContext";
import { useLandingProducts } from "@hooks/use-landing-products";
import useProduct from "@hooks/use-product";
import client from "api/apollo-client";
import {
  GET_PRODUCTS_SLUG,
  GET_PRODUCT_BY_SLUG,
  GET_LANDING_PRODUCTS,
} from 'api/queries'
import { Layout, SingleProductForm } from "components";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import type { Icategory, Iproduct, IproductAttributes } from "types/interfaces";
import { getDefaultCategoriesLinks } from "utils";

interface Iprops {
	defaultCategoriesLinks: Icategory[];
}

const Product: NextPage<Iprops> = ({ defaultCategoriesLinks }) => {
	const router = useRouter();
	const slugAsString = String(router.query.slug);
	const { product, loading, error } = useProduct({ slug: slugAsString })

	return (
		<Layout links={defaultCategoriesLinks}>
			{product && !loading ? (
				<section className="overflow-hidden text-gray-600 body-font">
					<div className="container pb-24 mx-auto lg:pt-20">
						<div className="relative flex flex-wrap mx-auto lg:w-full">
							<div className="relative w-full overflow-hidden h-96 lg:w-1/2 lg:h-auto">
								<Image
									alt="ecommerce"
									className="object-contain object-left-bottom lg:object-top"
									src={product.image}
									layout="fill"
								/>
							</div>
							<div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:pb-6 lg:mt-0">
								<h2 className="text-sm tracking-widest text-gray-500 title-font">
									{product.brand}
								</h2>
								<h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
									{product.title}
								</h1>
								<p className="mt-4 leading-relaxed">
									Fam locavore kickstarter distillery. Mixtape chillwave tumeric
									sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
									juiceramps cornhole raw denim forage brooklyn. Everyday carry
									+1 seitan poutine tumeric. Gastropub blue bottle austin
									listicle pour-over, neutra jean shorts keytar banjo tattooed
									umami cardigan.
								</p>
								<SingleProductForm id={product.id} price={product.price} />
							</div>
						</div>
					</div>
				</section>
			) : (
				"Loading"
			)}{" "}
		</Layout>
	);
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_PRODUCTS_SLUG,
  })
  const paths = data.getLandingProducts.products.map(({ slug }) => ({
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
  console.log(defaultCategoriesLinks)
	return {
    props: {
      product,
      ...defaultCategoriesLinks,
    },
  }
};
