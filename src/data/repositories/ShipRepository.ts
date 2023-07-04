import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { SHIPS_QUERY } from '../graphql/queries';
import Ship from '../../domain/models/Ship';

interface ShipRepository {
  getShips(): Promise<Ship[]>;
}

class ShipRepositoryImpl implements ShipRepository {
  private client: ApolloClient<NormalizedCacheObject>;

  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }

  async getShips(): Promise<Ship[]> {
    const response = await this.client.query({
      query: SHIPS_QUERY,
    });

    return response.data.ships;
  }
}

export default ShipRepositoryImpl;
