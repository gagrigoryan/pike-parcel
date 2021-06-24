import React from "react";
import styles from "./loading.module.scss";
import { PageBlock } from "../page-layout/PageBlock";

export const Loading: React.FC = () => {
    return (
        <div className={styles.container}>
            <PageBlock>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Отправка данных...</h1>
                    <p className={styles.text}>
                        Пожалуйста, не закрывайте и не перезагружайте страницу, пока не увидите сообщение
                        об&nbsp;успешной отправке обращения.
                    </p>
                </div>
            </PageBlock>
        </div>
    );
};
