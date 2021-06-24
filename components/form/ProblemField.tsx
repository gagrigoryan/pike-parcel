import React from "react";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { TextareaField } from "../fields/TextareaField";

export const ProblemFieldLabel = "Подробно расскажите — что Вас не устроило при обращении за медицинской помощью*";

export const ProblemField: React.FC<ControlledFieldProps> = ({ control, name, ...props }) => {
    return (
        <TextareaField
            {...props}
            control={control}
            name={name}
            label={ProblemFieldLabel}
            rules={{
                required: "Заполните поле",
            }}
        />
    );
};
