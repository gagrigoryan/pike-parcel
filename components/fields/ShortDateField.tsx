import React from "react";
import clsx from "clsx";
import NumberFormat from "react-number-format";
import { FieldError, useController } from "react-hook-form";
import { checkDateValid } from "../../utils/checkDateValid";
import { ControlledFieldProps } from "./ControlledFieldProps";
import styles from "../date-period-field/datePeriodField.module.scss";

type ShortDateFieldType = ControlledFieldProps & {
    label: string;
    onHandleError: (value: FieldError | undefined) => void;
};

const shortDateRules = {
    validate: {
        dateValid: (value: string) => checkDateValid(value, "MM.yyyy") && value.replace(/_/g, "").length === 7,
    },
};

export const ShortDateField: React.FC<ShortDateFieldType> = ({
    control,
    name,
    label,
    onHandleError,
    rules,
    className,
    defaultValue,
}) => {
    const {
        field: { ref, ...inputProps },
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue: defaultValue || "",
        rules: { ...shortDateRules, ...rules },
    });

    React.useEffect(() => {
        if (!error) return;
        onHandleError(error);
    }, [error, onHandleError]);

    return (
        <NumberFormat
            label={label}
            format="##.####"
            placeholder="ММ.ГГГГ"
            mask="_"
            error={error}
            className={clsx(styles.input, error && styles.inputError, className)}
            data-testid={name}
            {...inputProps}
        />
    );
};
