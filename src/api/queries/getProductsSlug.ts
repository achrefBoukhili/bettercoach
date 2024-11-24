import { gql } from "@apollo/client";
export default gql`
  query {
    getLandingProducts{
      products {
        attributes
        slug
      }
    }
  }
`;