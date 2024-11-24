import { gql } from "@apollo/client";
export default gql`
  query ($slug: String!) {
    getProductBySlug (slug: $slug) {
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
