import { gql } from '@apollo/client'

export const ADD_FAVORITE_PRODUCT = gql`
  mutation ($productID: ID!) {
    addProductToFavList(
      product: $productID
    ) {
      product {
        id
        category
        shop
        currency
        approved
        title
        inStock
        live
        featured
        images
        video
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
  }
`;

export const REMOVE_FAVORITE_PRODUCT = gql`
  mutation ($favoriteProductID: ID!) {
    deleteFavoriteProduct( id: $favoriteProductID ) {
      data {
        id
      }
    }
  }
`