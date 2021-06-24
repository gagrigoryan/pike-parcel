import React from "react";
import styles from "./success.module.scss";
import { PageBlock } from "../page-layout/PageBlock";

interface SuccessPageProps {
    id?: string;
}

export const Success: React.FC<SuccessPageProps> = ({ id }) => {
    return (
        <div className={styles.container}>
            <PageBlock>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Обращение {id} отправлено!</h1>
                    <p className={styles.text}>
                        Наши страховые представители свяжутся с&nbsp;Вами&nbsp;в&nbsp;ближайшее время. <br />
                        Для вашего удобства сохраните номер обращения
                    </p>
                    <a target="_blank" className={styles.link} href="https://alfastrahoms.ru/" rel="noreferrer">
                        Официальный сайт АльфаСтрахование – ОМС
                    </a>
                </div>
            </PageBlock>
        </div>
    );
};
