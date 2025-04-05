import React, { useContext, useMemo } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCart/ShoppingCartContext";
import { Badge } from "../../components/Badge/Badge";
import styles from "./Header.module.css";

export default function Header() {
    const { state: { cart } } = useContext(ShoppingCartContext);

    const { totalQuantity } = useMemo(() => {
        return cart.reduce(
            (acc, item) => {
                return {
                    totalQuantity: acc.totalQuantity + item.qty,
                };
            },
            { totalQuantity: 0 }
        );
    }, [cart]);

    return (
        <div className={styles.header}>
            <img src={"/octopus-logo.svg"} alt="Octopus Energy Logo" width="230px" />
            <div>
                {totalQuantity > 0 && (
                    <Badge title="Basket items" value={totalQuantity} />
                )}
                <img className={styles.cartIcon} src="/basket.svg" alt="Basket icon" />
            </div>
        </div>
    );
}
