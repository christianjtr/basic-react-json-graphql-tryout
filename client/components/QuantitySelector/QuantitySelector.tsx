import React, { useMemo } from "react";
import { Button } from "../Button/Button";
import styles from './QuantitySelector.module.css';

interface QuantitySelectorProps {
    value: number;
    onSelectQuantity?: (value: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = (props): React.JSX.Element => {
    const { value, onSelectQuantity } = props || {};

    const isButtonDecreaseEnabled = useMemo(() => value > 1, [value]);

    const handleOnSelectQuantity = (operation: 'increase' | 'decrease') => {
        if (value === 1 && operation === 'decrease') {
            onSelectQuantity?.(value);
            return;
        }

        const newQuantity = operation === 'increase' ? value + 1 : value - 1;

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
                <span title="Current quantity" className={styles.quantityIndicator} aria-label="Quantity">
                    {value}
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
