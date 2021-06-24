import * as React from "react";
import clsx from "clsx";
import { FieldError } from "react-hook-form";
import styles from "./input.module.scss";

export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: string;
    labelComment?: string;
    error?: FieldError;
    className?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ error, className, label, labelComment, ...props }, ref) => {
        return (
            <label className={clsx(styles.container, className)}>
                <div className={styles.label}>
                    {label} {labelComment && <span className={styles.labelComment}>{labelComment}</span>}
                </div>
                <input ref={ref} className={clsx(styles.input, error && styles.inputError)} {...props} />
                {error && (
                    <span role="alert" className={styles.error}>
                        {error.message}
                    </span>
                )}
            </label>
        );
    }
);

Input.displayName = "Input";
