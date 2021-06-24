import React from "react";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { TextField } from "../fields/TextField";

export const ForeignPassportFieldLabel = "Серия и номер паспорта иностранного гражданина";

export const ForeignPassportField: React.FC<ControlledFieldProps> = ({ control, name, ...props }) => {
    return (
        <TextField
            {...props}
            control={control}
            name={name}
            label={ForeignPassportFieldLabel}
            rules={{
                required: { value: true, message: "Введите паспорт иностранного гражданина" },
                pattern: {
                    value: /([^\s]*)/,
                    message: "Введите паспорт иностранного гражданина",
                },
            }}
        />
    );
};
