import { gql } from "@apollo/client"


export const GET_CATEGORIES_SLUG = gql`
  query {
    categories (sort: "id:ASC") {
      data {
        attributes {
          slug
        }
      }
    }
  }
`
export const GET_USER_FAVORITE_PRODUCTS_IDS = gql`
  query ($userID: ID!) {
    favoriteProducts(filters: { users_permissions_user: { id: { eq: $userID } } }) {
      data {
        attributes {
          product {
            data {
              id
            }
          }
        }
      }
    }
  }
`

export const GET_USER_FAVORITE_PRODUCTS = gql`
  query {
    getMyFavoriteProducts {
      products{
        images {
          secure_url
        }
        title
      }
    }
  }
`
