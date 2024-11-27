import { gql } from '@apollo/client'
export const ADD_PRODUCT_REVIEW = gql`
  mutation ($productId: String!, $rating: Float!, $review: String!) {
    addProductReview(
      payload: {
        product: $productId
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