import * as React from "react";
import NumberFormat from "react-number-format";
import clsx from "clsx";
import { FieldError } from "react-hook-form";
import styles from "./input.module.scss";

export type InputWithMaskProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label: string;
    format: string;
    placeholder: string;
    mask?: string | string[];
    isAllowed?: (value: unknown) => boolean;
    error?: FieldError;
    className?: string;
};

export const InputWithMask = React.forwardRef<HTMLInputElement, InputWithMaskProps>(
    ({ error, className, label, format, placeholder, mask, isAllowed, ...props }, ref) => {
        return (
            <label className={clsx(styles.container, className)}>
                <span className={styles.label}>{label}</span>
                {/* @ts-ignore */}
                <NumberFormat
                    {...props}
                    format={format}
                    placeholder={placeholder}
                    mask={mask}
                    isAllowed={isAllowed}
                    className={clsx(styles.input, error && styles.inputError)}
                />
                {error && (
                    <span role="alert" className={styles.error}>
                        {error.message}
                    </span>
                )}
            </label>
        );
    }
);

InputWithMask.displayName = "InputWithMask";
