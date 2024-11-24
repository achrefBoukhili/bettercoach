import { gql } from "@apollo/client";
export default gql`
  query {
    getLandingProducts{
      products {
        attributes
        averageRating
        brand
        category
        currency
        description
        featured
        id
        images {
          secure_url
        }
        percentageDiscount
        price
        slug
        title
        totalReviews
      }
    }
  }
`;