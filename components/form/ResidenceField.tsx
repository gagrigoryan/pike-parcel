import React from "react";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { MaskedField } from "../fields/MaskedField";

export const ResidenceFieldLabel = "Серия и номер вида на жительство*";

export const ResidenceField: React.FC<ControlledFieldProps> = ({ control, name, ...props }) => {
    return (
        <MaskedField
            {...props}
            control={control}
            name={name}
            label={ResidenceFieldLabel}
            format="## №#######"
            placeholder="ХХ №ХХХХХХХ"
            mask="_"
            rules={{
                required: { value: true, message: "Введите корректный вид на жительство" },
                pattern: {
                    value: /^([0-9]{2} №[0-9]{7})$/,
                    message: "Введите корректный вид на жительство",
                },
            }}
        />
    );
};
