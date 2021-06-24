import React from "react";
import styles from "./error.module.scss";
import { PageBlock } from "../page-layout/PageBlock";
import { Button, ButtonStyleEnum } from "../button/Button";
import { RoutesEnum } from "../../domain/value-objects/Routes";
import Link from "next/link";

export const Error: React.FC = () => {
    return (
        <div className={styles.container}>
            <PageBlock>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Произошла ошибка!</h1>
                    <p className={styles.text}>К сожалению, ваша заявка не была отправлена...</p>
                    <Link href={RoutesEnum.form}>
                        <Button style={ButtonStyleEnum.White}>Заполнить заявку еще раз</Button>
                    </Link>
                </div>
            </PageBlock>
        </div>
    );
};
