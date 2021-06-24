import React from "react";
import { useController } from "react-hook-form";
import { Input, InputProps } from "../input/Input";
import { ControlledFieldProps } from "./ControlledFieldProps";

export const TextField: React.FC<ControlledFieldProps & InputProps> = ({
    control,
    name,
    label,
    rules,
    errors,
    shouldUnregister,
    defaultValue,
    ...props
}) => {
    const {
        field: { ref, ...inputProps },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
        defaultValue: defaultValue || "",
        shouldUnregister: shouldUnregister || true,
    });

    return <Input {...props} {...inputProps} error={error} ref={ref} label={label} />;
};
