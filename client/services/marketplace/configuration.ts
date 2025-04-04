import packageJSON from "../../package.json";
import { createGraphQLClient } from "../clients/graphqlClient";

const CONFIGURATION = {
    BASE_URL: `http://localhost:${packageJSON.config.graphql_port}/`,
};

export const graphQLClient = createGraphQLClient(CONFIGURATION.BASE_URL);