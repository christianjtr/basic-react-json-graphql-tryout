import React from "react";
import { createContext } from "react";
import { ShoppingCartState, ShoppingCart } from "./state";
import { ShoppingCartActionTypes } from "./action-types";

export type ShoppingCartContextType = {
    state: ShoppingCartState;
    dispatch: React.Dispatch<ShoppingCartActionTypes>;
};

export const ShoppingCartContext: React.Context<ShoppingCartContextType> = createContext<ShoppingCartContextType>({
    state: ShoppingCart,
    dispatch: () => { },
});