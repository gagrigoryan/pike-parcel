import React from "react";
import clsx from "clsx";
import styles from "./qualityStage.module.scss";

type QualityStageProps = {
    icon: string;
    description: string;
    className?: string;
};

const QualityStage: React.FC<QualityStageProps> = ({ icon, description, className }) => {
    return (
        <div className={clsx(styles.stage, className)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={icon} alt="" />
            <p className={styles.text}>{description}</p>
        </div>
    );
};

export default QualityStage;
