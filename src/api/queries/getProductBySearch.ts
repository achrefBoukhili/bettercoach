import { gql } from "@apollo/client";
export default gql`
  query ($search: String!) {
    searchHomeProducts(search: $search) {
      id
      category
      currency
      approved
      title
      inStock
      live
      featured
      images{ secure_url }
      type
      brand
      color
      description
      price
      negotiable
      slug
      isAddedToFavs
      averageRating
      totalReviews
      percentageDiscount
      attributes
    }
  }
`;
