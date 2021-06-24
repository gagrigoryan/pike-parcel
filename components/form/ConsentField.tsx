import React from "react";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { CheckboxField } from "../fields/CheckboxField";

type ConcentFieldProps = ControlledFieldProps & {
    label: string | React.ReactElement;
    errorMessage: string;
};

export const ConsentField: React.FC<ConcentFieldProps> = ({
    control,
    name,
    label,
    errorMessage,
    onChange,
    ...props
}) => {
    return (
        <CheckboxField
            {...props}
            control={control}
            name={name}
            label={label}
            onChange={onChange}
            defaultChecked
            rules={{
                required: errorMessage,
            }}
        />
    );
};
