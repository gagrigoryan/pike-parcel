import React from "react";
import styles from "./pageBlock.module.scss";

export const PageBlock: React.FC = ({ children }) => <div className={styles.container}>{children}</div>;
