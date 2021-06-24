import React from "react";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { MaskedField } from "../fields/MaskedField";

export const PassportFieldLabel = "Серия и номер паспорта гражданина РФ*";

export const PassportField: React.FC<ControlledFieldProps> = ({ control, name, ...props }) => {
    return (
        <MaskedField
            {...props}
            control={control}
            name={name}
            label={PassportFieldLabel}
            format="## ## ######"
            placeholder="XX XX XXXXXX"
            mask="_"
            rules={{
                required: { value: true, message: "Введите корректный паспорт РФ" },
                pattern: {
                    value: /^([0-9]{2} [0-9]{2} [0-9]{6})$/,
                    message: "Введите корректный паспорт РФ",
                },
            }}
        />
    );
};
