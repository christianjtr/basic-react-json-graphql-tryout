import { ShoppingCartItem } from "../../types/ShoppingCartItem";
import { ShoppingCartState } from "./state";
import { ShoppingCartActionTypes, SHOPPING_CART_ACTION_TYPES } from "./action-types";

export const ShoppingCartActions = (state: ShoppingCartState, action: ShoppingCartActionTypes): ShoppingCartState => {
    switch (action.type) {
        case SHOPPING_CART_ACTION_TYPES.ADD_ITEM_TO_CART: {
            const { item: itemToAdd } = action.payload;

            const reducedItems = [...state.cart, itemToAdd].reduce((acc, item) => {
                const existingItem = acc.find(eachItem => eachItem.sku === item.sku);

                if (existingItem) {
                    existingItem.qty += item.qty;
                    existingItem.total += item.total;
                } else {
                    acc.push({ ...item });
                }

                return acc;
            }, [] as ShoppingCartItem[]);

            return {
                ...state,
                cart: reducedItems,
            };
        }
        default: {
            throw (`Unhandled action type: ${action.type}`);
        }
    }
};