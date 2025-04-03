import { GraphQLClient } from 'graphql-request';
import type { RequestConfig } from 'graphql-request/build/legacy/helpers/types';

export function createGraphQLClient(url: string, config?: RequestConfig) {
    const client = new GraphQLClient(url, config);

    return client;
}