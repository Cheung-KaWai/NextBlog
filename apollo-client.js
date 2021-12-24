import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://still-escarpment-29927.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
