import React from "react";
import { useController } from "react-hook-form";
import { ControlledFieldProps } from "./ControlledFieldProps";
import { Textarea, TextareaProps } from "../textarea/Textarea";

export const TextareaField: React.FC<ControlledFieldProps & TextareaProps> = ({
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
        shouldUnregister,
        defaultValue: defaultValue || "",
    });

    return <Textarea {...props} {...inputProps} error={error} ref={ref} label={label} />;
};
