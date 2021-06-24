import React from "react";
import styles from "./pageLayout.module.scss";

interface PageLayoutProps {
    header: React.ReactElement;
    footer: React.ReactElement;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, header, footer }) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.wrapper}>{header}</div>
            </header>
            <div className={styles.content}>{children}</div>
            <footer className={styles.footer}>
                <div className={styles.wrapper}>{footer}</div>
            </footer>
        </div>
    );
};
