import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloLink } from "apollo-link"
import { HttpLink } from "apollo-link-http"
import gql from "graphql-tag"

const link = new HttpLink({ uri: "http://localhost:54320/" })

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache,
})

export default client
