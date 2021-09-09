import React, {useState} from 'react';

import { useMutation } from 'graphql-hooks';

// mutation MyMutation {
//     insert_users_one(object: {username: "", id: 10}) {
//       id
//     }
//   }
 
const UPDATE_USER_MUTATION = `mutation UpdateUser(id: String!, username: String!) {
  updateUser(id: $id, username: $name) {
    id
  }
}`

