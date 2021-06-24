import React from "react";
import styles from "./header.module.scss";

export const Header: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <a href="https://alfastrahoms.ru/">
                <div className={styles.logo} />
            </a>
            <a href="tel:88005551001" className={styles.phone}>
                8 800 555 10 01
            </a>
        </div>
    );
};
