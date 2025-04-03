import { graphQLClient } from "../configuration";
import { GET_PRODUCT_BY_ID } from "./queries/GetProductById";
import type { Marketplace } from "./types";

//INFO: Other services can be added here...

const getProductById = async (id: number): Promise<Marketplace.Product> => {
    try {
        const response = await graphQLClient.request<Marketplace.Product>(GET_PRODUCT_BY_ID, {
            id
        });

        return response;

    } catch (error) {
        console.error(`[MARKET_PLACE_GRAPHQL_SERVICE][GET_ERROR_BY_ID]: An error has occurred`, error);
        throw (error);
    }
}

export { getProductById };