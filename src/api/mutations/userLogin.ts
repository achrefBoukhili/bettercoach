import { gql } from "@apollo/client";
export const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      accessToken
      authToken
      user {
        _id
        displayName
        email
        emailVerified
        language
        profileId
        provider
        image
        sex
      }
    }
  }
`;