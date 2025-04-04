import React, { useState, useMemo } from "react";
import { Button } from "../Button/Button";
import styles from './QuantitySelector.module.css';

interface QuantitySelectorProps {
    onSelectQuantity?: (value: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = (props): React.JSX.Element => {
    const { onSelectQuantity } = props || {};

    const [quantity, setQuantity] = useState<number>(1);

    const isButtonDecreaseEnabled = useMemo(() => quantity > 1, [quantity]);

    const handleOnSelectQuantity = (operation: 'increase' | 'decrease') => {
        if (quantity === 1 && operation === 'decrease') {
            onSelectQuantity?.(quantity);
            return;
        }

        const newQuantity = operation === 'increase' ? quantity + 1 : quantity - 1;

        setQuantity(newQuantity);
        onSelectQuantity?.(newQuantity);
    }

    return (
        <div className={styles.container}>
            <span className={styles.preHeading}>Qty</span>
            <div className={styles.quantitySelector}>
                <Button
                    id="btn-increase"
                    disabled={!isButtonDecreaseEnabled}
                    onClick={() => handleOnSelectQuantity('decrease')}
                    aria-label="Icrease items">
                    -
                </Button>
                <span className={styles.quantityIndicator} aria-label="Quantity">
                    {quantity}
                </span>
                <Button
                    id="btn-decrease"
                    onClick={() => handleOnSelectQuantity('increase')}
                    aria-label="Decrease items">
                    +
                </Button>
            </div>
        </div>
    );
}

export { QuantitySelector };
