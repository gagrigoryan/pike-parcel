import React from "react";
import clsx from "clsx";
import styles from "./footer.module.scss";
import SocialLink from "../social/Social";
import SocialInst from "../icons/SocialInstIcon";
import SocialVk from "../icons/SocialVkIcon";
import SocialFacebook from "../icons/SocialFacebookIcon";

export const Footer: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.copyright}>
                <p className={styles.text}>
                    © 2021 Общество с ограниченной ответственностью «АльфаСтрахование — ОМС»
                    <br />
                    Лицензия ОC № 0193-01 ЦБ РФ выдана бессрочно
                </p>
                <div className={styles.copyrightLink}>
                    <a
                        target="_blank"
                        className={styles.link}
                        href="https://cbr.ru/finorg/foinfo/?ogrn=1047100775963"
                        rel="noreferrer">
                        Ссылка на раздел официального сайта Банка России, содержащий информацию о структуре и составе
                        акционеров (участников), в том числе о лицах, под контролем либо значительным влиянием которых
                        находится ООО «АльфаСтрахование – ОМС»
                    </a>
                </div>
                <p className={styles.text}>
                    Группа{" "}
                    <a target="_blank" className={styles.link} href="https://www.alfastrah.ru" rel="noreferrer">
                        «АльфаСтрахование»
                    </a>
                </p>
            </div>
            <div className={styles.info}>
                <a target="_blank" className={styles.link} href="https://alfastrahoms.ru/" rel="noreferrer">
                    Официальный сайт АльфаСтрахование — ОМС
                </a>
                <p className={clsx(styles.text, styles.infoText)}>Мы в социальных сетях:</p>
                <ul className={styles.socialLinks}>
                    <li className={styles.socialLinksItem}>
                        <SocialLink href="https://www.instagram.com/alfastrahoms/" icon={<SocialInst />} />
                    </li>
                    <li className={styles.socialLinksItem}>
                        <SocialLink href="https://www.facebook.com/alfastrahoms/" icon={<SocialFacebook />} />
                    </li>
                    <li className={styles.socialLinksItem}>
                        <SocialLink href="https://vk.com/alfastrahoms" icon={<SocialVk />} />
                    </li>
                </ul>
            </div>
        </div>
    );
};
