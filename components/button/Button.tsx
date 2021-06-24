import React from "react";
import clsx from "clsx";
import styles from "./button.module.scss";

export enum ButtonStyleEnum {
    Primary = "primary",
    White = "white",
}

export interface ButtonProps {
    style: ButtonStyleEnum;
    type?: "submit" | "button";
    disabled?: boolean;
    className?: string;
    onClick?: () => void | Promise<void>;
}

export const Button: React.FC<ButtonProps> = ({ children, style, type = "button", disabled, className, onClick }) => (
    <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={clsx(
            className,
            style === ButtonStyleEnum.Primary
                ? styles.buttonPrimary
                : style === ButtonStyleEnum.White
                ? styles.buttonWhite
                : null
        )}>
        {children}
    </button>
);
