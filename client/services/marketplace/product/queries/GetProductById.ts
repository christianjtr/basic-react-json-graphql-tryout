import { gql } from "graphql-request";

const productDetailsFragment = `
    fragment productDetails on Product {
        id
        name
        power
        description
        price
        quantity
        brand
        weight
        height
        width
        length
        model_code
        colour
        img_url
    }
`;

const GET_PRODUCT_BY_ID = gql`
    query GetProductById($id: ID!) {
        Product(id: $id) {
            ...productDetails
        }
    }
    ${productDetailsFragment}
`;

export { GET_PRODUCT_BY_ID };