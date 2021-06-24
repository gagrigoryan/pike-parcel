import React from "react";
import { useController } from "react-hook-form";
import { Checkbox, CheckboxProps } from "../checkbox/Checkbox";
import { ControlledFieldProps } from "./ControlledFieldProps";

export const CheckboxField: React.FC<CheckboxProps & ControlledFieldProps> = ({
    control,
    name,
    label,
    rules,
    shouldUnregister,
    required,
    defaultChecked,
    ...props
}) => {
    const {
        field: { ref, ...inputProps },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
        defaultValue: defaultChecked,
        shouldUnregister: true,
    });
    return <Checkbox {...props} ref={ref} {...inputProps} error={error} label={label} />;
};
