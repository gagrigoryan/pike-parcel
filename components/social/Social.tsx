import React from "react";
import styles from "./social.module.scss";

type SocialLinkProps = {
    icon: React.ReactNode;
    href: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => (
    <a target="_blank" href={href} className={styles.social} rel="noreferrer">
        {icon}
    </a>
);

export default SocialLink;
