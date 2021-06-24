import React from "react";
import styles from "./textarea.module.scss";
import clsx from "clsx";
import { FieldError } from "react-hook-form";

export type TextareaProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
> & {
    label: string;
    error?: FieldError;
    className?: string;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, name, error, className, ...props }, ref) => {
        return (
            <label className={clsx(styles.container, className)}>
                <span className={styles.label}>{label}</span>
                <textarea className={clsx(styles.textarea, error && styles.fieldError)} ref={ref} {...props} />
                {error && (
                    <span role="alert" className={styles.error}>
                        {error.message}
                    </span>
                )}
            </label>
        );
    }
);

Textarea.displayName = "Textarea";
