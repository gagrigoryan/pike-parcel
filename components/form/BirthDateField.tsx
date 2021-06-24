import React from "react";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { MaskedField } from "../fields/MaskedField";
import { checkDateValid } from "../../utils/checkDateValid";
import { checkAgeLessThan } from "../../utils/checkAgeLessThan";

export const BirthDateFieldLabel = "Дата рождения*";

type BirthDateFieldProps = ControlledFieldProps & {
    onBlurHandler?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

export const BirthDateField: React.FC<BirthDateFieldProps> = ({ control, name, onBlurHandler, ...props }) => {
    return (
        <MaskedField
            {...props}
            control={control}
            name={name}
            label={BirthDateFieldLabel}
            format="##.##.####"
            placeholder="ДД.ММ.ГГГГ"
            mask="_"
            rules={{
                validate: {
                    dateValid: (value: string) => checkDateValid(value) || "Введите корректную дату рождения",
                    ageLessThen: (value: string) => checkAgeLessThan(value, 105) || "Введите корректную дату рождения",
                },
            }}
        />
    );
};
