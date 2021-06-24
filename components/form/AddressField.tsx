import React from "react";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { TextField } from "../fields/TextField";

export const AddressFieldLabel = "Город, улица, дом, квартира*";

export const AddressField: React.FC<ControlledFieldProps> = ({ control, name, ...props }) => {
    return (
        <TextField
            {...props}
            control={control}
            name={name}
            label={AddressFieldLabel}
            rules={{
                required: "Введите адрес",
            }}
        />
    );
};
