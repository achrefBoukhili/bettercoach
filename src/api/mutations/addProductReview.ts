import { gql } from '@apollo/client'
export const ADD_PRODUCT_REVIEW = gql`
  mutation ($product: String!, $rating: Float!, $review: String!) {
    addProductReview(
      payload: {
        product: $product
        rating: $rating
        review: $review
        isImages: true
      }
    ) {
        id
        review
        rating
        isImages
        createdAt
        updatedAt
      }
    }
`;