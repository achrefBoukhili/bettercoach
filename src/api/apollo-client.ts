import { ApolloClient, InMemoryCache } from '@apollo/client'

const API_URL = "https://api-dev.shopi.co.ke/graphql";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
})

export default client
