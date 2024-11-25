import { GET_LANDING_PRODUCTS } from "@/api/queries";
import { useQuery } from "@apollo/client";
import { ProductInfo, SingleProductForm } from "components";
import { useLandingProducts } from "@hooks/use-landing-products";
import type { Iproduct, IproductReviews } from "types/interfaces";
import useProduct from "@hooks/use-product";
import useProductReviews from "@hooks/use-product-reviews";
import Image from "next/image";
import { useRouter } from "next/router";
interface Iprops {
  slug: string;
}
const ProductDetails: React.FC<Iprops> = ({ slug }) => {
	const { product, loading, error } = useProduct({ slug });

	return (
		<>
			<section className="overflow-hidden text-gray-600 body-font">
					<div className="container pb-24 mx-auto lg:pt-20">
						<div className="relative flex flex-wrap mx-auto lg:w-full">
							<div className="relative w-full max-h-dvh overflow-hidden h-96 lg:w-1/2 lg:h-auto">
								<Image
									alt="ecommerce"
									className="object-contain object-left-bottom lg:object-top"
									src={(product?.images[0] as { secure_url: string })?.secure_url || ''}
									layout="fill"
								/>
							</div>
							<div className="w-full h-fit min-h-dvh mt-6 lg:w-1/2 lg:pl-10 lg:pb-6 lg:mt-0">
								<h2 className="text-sm tracking-widest text-gray-500 title-font">
									{product?.brand}
								</h2>
								<h1 className="mb-5 text-3xl font-medium text-gray-900 title-font">
									{product?.title}
								</h1>
								<ProductInfo
									description={product?.description || ''}
									productID={product?.id || ''}
								/>
								<SingleProductForm id={product?.id || ''} price={Number(product?.price) || 0} />
							</div>
						</div>
					</div>
				</section>
		</>
	);
};export default ProductDetails;