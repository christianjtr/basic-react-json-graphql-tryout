import React, { useReducer } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { ShoppingCart } from "./state";
import { ShoppingCartActions } from "./actions";

export interface ShoppingCartProviderProps {
    children: React.ReactNode;
}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({ children }): React.ReactElement => {
    const [state, dispatch] = useReducer(ShoppingCartActions, ShoppingCart);

    return <ShoppingCartContext.Provider value={{ state, dispatch }}>{children}</ShoppingCartContext.Provider>;
};