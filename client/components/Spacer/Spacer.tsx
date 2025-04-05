import React from "react";
import styles from "./Spacer.module.css";

interface SpacerProps {
    style?: React.CSSProperties;
}

const Spacer: React.FC<SpacerProps> = (props): React.JSX.Element => {
    const { style } = props;

    return (
        <hr className={styles.spacer} style={style}></hr>
    );
}

export { Spacer };
