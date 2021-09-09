import { GraphQLClient } from 'graphql-hooks'
import { SubscriptionClient } from 'subscriptions-transport-ws'
// or
import { createClient } from 'graphql-ws'

const client = new GraphQLClient({
  url: 'https://new-project.hasura.app/v1/graphql',
  headers:{
      'x-hasura-admin-secret':'q8qZGu2zrN4SdD2I51kJr49yiaAkDALC0efO9sPae6eU6LiayXn3Z2gzv9QM6T6w'
  },
  // subscriptionClient: new SubscriptionClient('ws://new-project.hasura.app/v1/graphql', {
  //   /* additional config options */
  // }),
  // or
  /*subscriptionClient: createClient({
    url: 'ws://localhost:8000/graphql'
    /* additional config options
  })*/
})

export default client;