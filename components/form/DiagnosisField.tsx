import React from "react";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { TextField } from "../fields/TextField";

export const DiagnosisFieldLabel = "Диагноз";

export const DiagnosisField: React.FC<ControlledFieldProps> = ({ control, name }) => {
    return (
        <TextField
            control={control}
            name={name}
            label={DiagnosisFieldLabel}
            labelComment="(Заполняется при наличии у Вас информации о диагнозе)"
        />
    );
};
