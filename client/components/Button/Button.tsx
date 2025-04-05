import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string | number;
    variant?: "primary";
    isFullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = (props): React.JSX.Element => {
    const { children, variant = "primary", disabled = false, isFullWidth = false, ...rest } = props;

    const buttonClasses = [
        styles.button,
        styles[variant],
        ...(isFullWidth ? [styles.fullWidth] : []),
        ...(disabled ? [styles.disabled] : [])
    ].filter(Boolean).join(" ");

    return (
        <button className={buttonClasses} disabled={disabled} {...rest}>{children}</button>
    );
}

export { Button };