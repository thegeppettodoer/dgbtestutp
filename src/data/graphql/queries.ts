import { gql } from '@apollo/client';

export const SHIPS_QUERY = gql`
  query Ships {
    ships {
      image
      name
    }
  }
`;
