import { ShoppingCartItem } from "../../types/ShoppingCartItem";

export enum SHOPPING_CART_ACTION_TYPES {
    ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
}

export type ShoppingCartActionTypes =
    | { type: SHOPPING_CART_ACTION_TYPES.ADD_ITEM_TO_CART; payload: { item: ShoppingCartItem } }
