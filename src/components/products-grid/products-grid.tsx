import { GET_LANDING_PRODUCTS } from "@/api/queries";
import { useQuery } from "@apollo/client";
import ProductTile from '@components/product-tile'
import { useLandingProducts } from "@hooks/use-landing-products";
import type { Iproduct } from "types/interfaces";
const ProductsGrid: React.FC = () => {
	const { products, loading, error } = useLandingProducts();
	return (
		<div className="grid grid-cols-4 gap-4">
			{products?.map((product) => {
				return <ProductTile key={product.id} product={product} />
			})}
		</div>
	);
};

export default ProductsGrid;
