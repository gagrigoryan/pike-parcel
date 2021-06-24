import React from "react";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { MaskedField } from "../fields/MaskedField";

export const SnilsFieldLabel = "Номер СНИЛС*";

export const SnilsField: React.FC<ControlledFieldProps> = ({ control, name, ...props }) => {
    return (
        <MaskedField
            {...props}
            control={control}
            name={name}
            label={SnilsFieldLabel}
            format="###-###-### ##"
            placeholder="ХХХ-ХХХ-ХХХ XX"
            mask="_"
            rules={{
                required: { value: true, message: "Введите корректный СНИЛС" },
                pattern: {
                    value: /^([0-9]{3}-[0-9]{3}-[0-9]{3} [0-9]{2})$/,
                    message: "Введите корректный СНИЛС",
                },
            }}
        />
    );
};
