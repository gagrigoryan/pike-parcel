import React from "react";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { MaskedField } from "../fields/MaskedField";

export const PhoneFieldLabel = "Телефон*";

export const validatePhone = (value: string): boolean => {
    const regExpPhoneShort = /^[+]7( )[0-9]{3}( )[0-9]{3}-[0-9]{2}-[0-9]{2}$/i;
    return regExpPhoneShort.test(value.trim());
};

export const PhoneField: React.FC<ControlledFieldProps> = ({ control, name, ...props }) => {
    const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        if (!input.value) {
            input.value = "+7";
        }
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        if (input.value.match(/^[+]7( )7/i)) {
            // @ts-ignore
            input.value = e.nativeEvent.data;
        }
    };

    return (
        <MaskedField
            {...props}
            control={control}
            name={name}
            label={PhoneFieldLabel}
            format="+7 ### ###-##-##"
            placeholder="+7 ___ ___ __ __"
            mask="_"
            type="tel"
            onChange={onChangeHandler}
            onFocus={onFocusHandler}
            rules={{
                required: {
                    value: true,
                    message: "Введите номер телефона",
                },
                validate: {
                    validationError: (value: string) => validatePhone(value) || "Введите номер телефона",
                },
            }}
        />
    );
};
