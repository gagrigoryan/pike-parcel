import React from "react";
import { useController } from "react-hook-form";
import { InputWithMask, InputWithMaskProps } from "../input/InputWithMask";
import { ControlledFieldProps } from "./ControlledFieldProps";

export const MaskedField: React.FC<ControlledFieldProps & InputWithMaskProps> = ({
    control,
    name,
    label,
    rules,
    errors,
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
    });

    return (
        <InputWithMask
            {...props}
            {...inputProps}
            onChange={(e) => {
                props.onChange && props.onChange(e);
                inputProps.onChange(e);
            }}
            error={error}
            ref={ref}
            label={label}
        />
    );
};
