import { ShoppingCartItem } from "../../types/ShoppingCartItem";

export interface ShoppingCartState {
    cart: ShoppingCartItem[];
}

export const ShoppingCart: ShoppingCartState = {
    cart: [],
};