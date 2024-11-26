import { useMutation } from "@apollo/client";
import { ADD_PRODUCT_REVIEW } from "api/mutations";
import { useUserContext } from "contexts/UserContext";
import * as Yup from "yup";
import type { IReviewFormValues } from "../../types/interfaces";

const useReviewForm = () => {
	const { user } = useUserContext();
	const [addProductReview] = useMutation(ADD_PRODUCT_REVIEW);

	const formInitialValues = {
		review: "",
		rating: 0,
		product: "",
	};

	const reviewSchema = Yup.object().shape({
		review: Yup.string().required("review is required"),
		rating: Yup.string().required("rating is required"),
	});

	const handleSubmit = async ({product, rating, review}: IReviewFormValues) => {
		const { data } = await addProductReview( {
		variables: {
			product,
			rating,
			review
		},
		context: {
			headers: {
				Authorization: user.jwtToken,
        accessToken: user.accessToken,
			},
		},
		fetchPolicy: "no-cache",
	});
	};

	return {
    reviewSchema,
		formInitialValues,
		handleSubmit,
	};
};

export default useReviewForm;
