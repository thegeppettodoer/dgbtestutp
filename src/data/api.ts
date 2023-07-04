

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});

export async function getShips() {
  const response = await client.query({
    query: gql`
      query Ships {
        ships {
          image
          name
        }
      }
    `,
  });

  return response.data.ships;
}