import React from "react";
import styles from "./Card.module.css";

const Image = (props: React.ImgHTMLAttributes<HTMLImageElement>): React.JSX.Element => {
    return (
        <div className={styles.cartImageContainer}>
            <img {...props} />
        </div>
    );
}

const Title = ({ children }: { children: string | number }): React.JSX.Element => {
    return (<h1 className={styles.title}>{children}</h1>);
}

const Content = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
    return (
        <div>{children}</div>
    );
}

function Card({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
}

Card.Image = Image;
Card.Title = Title;
Card.Content = Content;

export { Card };
