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

// export const GET_CATEGORY_BY_SLUG = gql`
//   query ($slug: String!) {
//     categories (filters: { slug: { eq: $slug } }) {
//       data {
//         attributes {
//           title
//           emoji
//           slug
//         }
//       }
//     }
//   }
// `

// export const GET_PRODUCTS = gql`
//   query {
//     products {
//       data {
//         id
//         attributes {
//           title
//           price
//           image
//           brand
//           slug
//           description
//         }
//       }
//     }
//   }
// `

// export const GET_PRODUCT_BY_SLUG = gql`
//   query ($slug: String!) {
//     products (filters: { slug: { eq: $slug } }) {
//       data {
//         id
//         attributes {
//           title
//           price
//           image
//           brand
//           slug
//           description
//         }
//       }
//     }
//   }
// `

// export const GET_PRODUCTS_OF_CATEGORY = gql`
//   query ($categorySlug: String!) {
//     categories (filters: { slug: { eq: $categorySlug } }) {
//       data {
//         attributes {
//           title
//           products {
//             data {
//               id
//               attributes {
//                 title
//                 price
//                 image
//                 brand
//                 slug
//                 description
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

export const GET_SIX_RANDOM_PRODUCTS = gql`
  query {
    products(pagination: { limit: 6 }) {
      data {
        attributes {
          title
          price
          image
          slug
        }
      }
    }
  }
`

export const GET_PRODUCTS_SLUG = gql`
  query {
    products {
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

// export const GET_USER_FAVORITE_PRODUCTS = gql`
//   query ($userID: ID!) {
//     favoriteProducts(filters: { users_permissions_user: { id: { eq: $userID } } }) {
//       data {
//         attributes {
//           product {
//             data {
//               attributes {
//                 title
//                 price
//                 image
//                 brand
//                 slug
//                 description
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export const GET_USER_FAVORITE_PRODUCT_ID = gql`
//   query ($userID: ID!, $productID: ID!) {
//     favoriteProducts(
//       filters: {
//         users_permissions_user: { id: { eq: $userID } },
//         product: { id: { eq: $productID } }
//       }
//     ) {
//       data {
//         id
//       }
//     }
//   }
// `

// export const GET_PRODUCTS_BY_TITLE = gql`
//   query ($productTitle: String) {
//     products (filters: { title: { contains: $productTitle } }) {
//       data {
//         attributes {
//           title
//           price
//           image
//           brand
//           slug
//           description
//         }
//       }
//     }
//   }
// `
