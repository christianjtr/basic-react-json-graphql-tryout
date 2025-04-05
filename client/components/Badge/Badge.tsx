import React from "react";
import styles from "./Badge.module.css";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string | number;
}

const Badge: React.FC<BadgeProps> = (props) => {
    const { value, ...rest } = props;

    return (
        <div className={styles.badge} {...rest}>{value}</div>
    );
}

export { Badge };
