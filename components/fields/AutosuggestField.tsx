import React from "react";
import AsyncSelect from "react-select/async";
import { useController } from "react-hook-form";
import { SelectOption } from "../../domain/value-objects/SelectOption";
import { ControlledFieldProps } from "./ControlledFieldProps";
import clsx from "clsx";
import styles from "../select/select.module.scss";

import { ControlComponent, ValueContainerComponent, DropdownMenuComponent } from "../select/SelectComponents";
import { useState } from "react";
import { dropdownStyles } from "../../domain/services/dropdownStylesObject";

export type AutosuggestProps = {
    label: string;
    loadOptions?: any;
    defaultOption?: SelectOption;
    className?: string;
};

export const AutosuggestField: React.FC<ControlledFieldProps & AutosuggestProps> = ({
    control,
    name,
    label,
    rules,
    loadOptions,
    defaultOption,
    defaultValue,
    className,
}) => {
    const {
        field: { ref, onChange, ...inputProps },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
        defaultValue: defaultValue || defaultOption || "",
    });

    const [focused, setFocused] = useState<boolean>(false);
    const [isOpen, setOpen] = useState<boolean>(false);

    const autosuggestStyles = {
        ...dropdownStyles(isOpen, !!error),
        singleValue: (styles: any) => ({
            ...styles,
            color: focused && "#fff",
        }),
    };

    return (
        <label className={clsx(styles.container, className)}>
            <span className={styles.label}>{label}</span>
            <AsyncSelect
                components={{
                    IndicatorSeparator: null,
                    DropdownIndicator: null,
                    Control: ControlComponent,
                    ValueContainer: ValueContainerComponent,
                    Menu: DropdownMenuComponent,
                }}
                error={error}
                ref={ref}
                label={label}
                placeholder=""
                cacheOptions
                loadOptions={loadOptions}
                onChange={onChange}
                {...inputProps}
                styles={autosuggestStyles}
                onMenuOpen={() => setFocused(true)}
                onMenuClose={() => setFocused(false)}
                noOptionsMessage={() => "Ничего не нашлось"}
                menuIsOpen={isOpen}
                onInputChange={(input) => setOpen(!!input)}
            />
            {error && (
                <span role="alert" className={styles.error}>
                    {error.message}
                </span>
            )}
        </label>
    );
};
