import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ApolloProvider } from '@apollo/client'
import client from 'api/apollo-client'

import '../styles/globals.css'
import 'animate.css';

import { UserContextProvider } from 'contexts/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Shopping - Explore</title>
        <meta
          name="description"
          content="Shopping is an ecommerce platform written using Next.js"
        />
      </Head>

      <ApolloProvider client={client}>
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
