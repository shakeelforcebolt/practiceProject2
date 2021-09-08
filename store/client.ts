// import { GraphQLClient } from "graphql-hooks";
//  const createApolloClient = (authToken) => {
//     return new ApolloClient({
//       link: new HttpLink({
//         uri: 'https://hasura.io/learn/graphql',
//         headers: {
//           Authorization: `Bearer ${authToken}`
//         }
//       }),
//       cache: new InMemoryCache(),
//     });
//    };