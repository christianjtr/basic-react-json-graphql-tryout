import React from "react";
import styles from "./ProductSpecifications.module.css";

type Specification = { label: string; value: string | number | undefined };

interface ProductSpecificationsProps {
    data: Specification[];
}

export default function ProductSpecifications(props: ProductSpecificationsProps): React.JSX.Element {
    const { data } = props;

    return (
        <div className={styles.container}>
            <span className={styles.title}>Specifications</span>
            <div className={styles.specificationsList}>
                {data.map((item, index) => (
                    <p key={`specification_item_${index}`} className={styles.specificationItem}>
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                    </p>
                ))}
            </div>
        </div>
    );
}
