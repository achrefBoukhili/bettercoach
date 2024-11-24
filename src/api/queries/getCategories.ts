import { gql } from "@apollo/client";
export default gql`
  query {
    getMainCategories {
        id
        name
        image
        slug
        live
    }
  }
`;