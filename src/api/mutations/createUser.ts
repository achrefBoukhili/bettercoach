import { gql } from "@apollo/client";
export const REGISTER = gql`
  mutation (
    $displayName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      payload: {
        displayName: $displayName
        email: $email
        password: $password
        provider: "local"
      }
    ) {
      accessToken
      authToken
      user {
        id
        _id
        displayName
        notifacations
        email
        emailVerified
        language
        profileId
        provider
        image
        sex
        tileDisplay
        place{
          id
          name
          popular
        }
        lastMessage {
          content
          owner
          read
          createdAt
        }
        lastOnline
        roles
        password
        unreadCount
      }
    }
  }
`;