import { gql } from "@apollo/client";
export default gql`
  query ($productID: String!) {
    getProductReviews (productId: $productID) {
      pageInfo{
        avgRating
        totalCount
        ratingCounts{
          rating
          count
        }
        totalReviews
        hasNextPage
        ratingPercentage
      }
      reviewList{
        user{
          displayName
          image
        }
        rating
        review
        media{
          secure_url
          public_id
        }
        isImages
        likes{
          displayName
          image
        }
        dislikes {
          displayName
        }
        createdAt
        updatedAt
      }
    }
  }
`;
