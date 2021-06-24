import React from "react";
import styles from "../components/back-page/backPage.module.scss";
import { PageBlock } from "../components/page-layout/PageBlock";
import { Button, ButtonStyleEnum } from "../components/button/Button";

const BackPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <PageBlock>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>
                        Сервис «Линия помощи» только для&nbsp;клиентов АльфаСтрахование — ОМС
                    </h1>
                    <p className={styles.text}>
                        Позвоните на номер горячей линии своей страховой медицинской огранизации, указанный на
                        официальном сайте.
                    </p>
                    <Button className={styles.button} style={ButtonStyleEnum.White}>
                        Назад
                    </Button>
                </div>
            </PageBlock>
        </div>
    );
};

export default BackPage;
