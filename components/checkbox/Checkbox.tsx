import React from "react";
import { FieldError } from "react-hook-form";
import clsx from "clsx";
import styles from "./checkbox.module.scss";
import CheckIcon from "../icons/CheckIcon";

export type CheckboxProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: string | React.ReactElement;
    error?: FieldError;
    className?: string;
    onChange: (value: any) => void;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ error, className, label, onChange }, ref) => {
        return (
            <label className={clsx(styles.wrapper, className)}>
                <div className={styles.container}>
                    <input
                        ref={ref}
                        data-testid={"checkbox"}
                        type="checkbox"
                        className={styles.input}
                        onChange={(e) => onChange(e.target.checked)}
                    />
                    <div className={styles.box}>
                        <CheckIcon />
                    </div>
                    <span className={styles.label}>{label}</span>
                </div>
                {error && (
                    <span role="alert" className={styles.error}>
                        {error.message}
                    </span>
                )}
            </label>
        );
    }
);

Checkbox.displayName = "Checkbox";
