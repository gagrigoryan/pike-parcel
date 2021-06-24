import React from "react";
import styles from "../components/start-page/startPage..module.scss";
import { PageBlock } from "../components/page-layout/PageBlock";
import QualityStage from "../components/quality-stage/QualityStage";
import { Button, ButtonStyleEnum } from "../components/button/Button";

export const StartPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <PageBlock>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Если Вы получаете медицинские услуги по&nbsp;полису ОМС и:</h1>
                    <div className={styles.stages}>
                        <QualityStage
                            className={styles.stage}
                            icon={"/medicine.svg"}
                            description={"Сомневаетесь в диагнозе, назначенном лечении или\u00A0его качестве"}
                        />
                        <QualityStage
                            className={styles.stage}
                            icon={"/calendar.svg"}
                            description={"Не можете своевременно получить медицинские услуги"}
                        />
                        <QualityStage
                            className={styles.stage}
                            icon={"/payment.svg"}
                            description={"Не уверены в\u00A0правомерности требований\u00A0оплаты"}
                        />
                    </div>
                    <p className={styles.text}>
                        Заполните форму и наши эксперты проведут проверку качества&nbsp;медицинской помощи,
                        проконсультируют Вас и&nbsp;дадут рекомендации
                    </p>
                    <div className={styles.divider} />
                    <p className={styles.actionTitle}>
                        Уточните – в какой страховой компании Вы застрахованы&nbsp;по&nbsp;ОМС?
                    </p>
                    <div className={styles.actionButtons}>
                        <Button className={styles.button} style={ButtonStyleEnum.Primary}>
                            В АльфаСтрахование-ОМС
                        </Button>
                        <Button className={styles.button} style={ButtonStyleEnum.White}>
                            В другой страховой компании
                        </Button>
                    </div>
                </div>
            </PageBlock>
        </div>
    );
};

export default StartPage;
