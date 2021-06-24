import React from "react";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { TextField } from "../fields/TextField";
import { checkAtLeastTwoWords } from "../../utils/checkAtLeastTwoWords";

export const ConfidantNameFieldLabel = "ФИО законного представителя*";

export const ConfidantNameField: React.FC<ControlledFieldProps> = ({ control, name, ...props }) => {
    return (
        <TextField
            {...props}
            control={control}
            name={name}
            label={ConfidantNameFieldLabel}
            rules={{
                pattern: {
                    value: /^[А-Яа-яЁё\s]+$/,
                    message: "Введите ФИО кириллицей через пробел",
                },
                validate: {
                    atLeastTwoWords: (value: string) =>
                        checkAtLeastTwoWords(value) || "Введите ФИО кириллицей через пробел",
                },
            }}
        />
    );
};
