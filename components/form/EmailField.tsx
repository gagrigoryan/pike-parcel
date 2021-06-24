import React from "react";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { TextField } from "../fields/TextField";

export const EmailFieldLabel = "Электронная почта*";

const EmailField: React.FC<ControlledFieldProps> = ({ control, name, ...props }) => {
    return (
        <TextField
            {...props}
            control={control}
            name={name}
            label={EmailFieldLabel}
            rules={{
                required: { value: true, message: "Введите эл. почту" },
                pattern: {
                    value: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
                    message: "Введите эл. почту",
                },
            }}
        />
    );
};

export default EmailField;
