import React from "react";
import styles from "./ProductDescription.module.css";

interface ProductDescriptionProps {
    children: string;
}

export default function ProductDescription(props: ProductDescriptionProps): React.JSX.Element {
    const { children } = props;

    return (
        <div className={styles.container}>
            <span className={styles.title}>Description</span>
            <p>{children}</p>
        </div>
    );
}
