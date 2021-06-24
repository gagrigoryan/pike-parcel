import React from "react";
import Select from "react-select";
import { useController } from "react-hook-form";
import { SelectOption } from "../../domain/value-objects/SelectOption";
import { ControlledFieldProps } from "./ControlledFieldProps";

import clsx from "clsx";
import styles from "../select/select.module.scss";
import {
    DropdownIndicatorComponent,
    ControlComponent,
    ValueContainerComponent,
    DropdownMenuComponent,
} from "../select/SelectComponents";
import { useState } from "react";
import { dropdownStyles } from "../../domain/services/dropdownStylesObject";

export type DropdownProps = {
    label: string;
    options?: SelectOption[];
    defaultOption?: SelectOption;
    onSelect?: (value: any) => void;
    className?: string;
};

export const DropdownField: React.FC<ControlledFieldProps & DropdownProps> = ({
    control,
    name,
    label,
    rules,
    options,
    defaultOption,
    defaultValue,
    onSelect,
    className,
}) => {
    const {
        field: { ref, ...inputProps },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
        defaultValue: defaultValue || defaultOption || "",
    });
    const [focused, setFocused] = useState<boolean>(false);

    return (
        <div className={clsx(styles.container, className)}>
            <label htmlFor={name} className={styles.label}>
                {label}
            </label>
            <Select
                components={{
                    IndicatorSeparator: null,
                    DropdownIndicator: DropdownIndicatorComponent,
                    Control: ControlComponent,
                    ValueContainer: ValueContainerComponent,
                    Menu: DropdownMenuComponent,
                }}
                isSearchable={false}
                {...inputProps}
                error={error}
                ref={ref}
                label={label}
                options={options}
                placeholder=""
                inputId={name}
                onChange={(value) => {
                    onSelect && onSelect(value);
                    inputProps.onChange(value);
                }}
                styles={dropdownStyles(focused, !!error)}
                onMenuOpen={() => setFocused(true)}
                onMenuClose={() => setFocused(false)}
            />
            {error && (
                <span role="alert" className={styles.error}>
                    {error.message}
                </span>
            )}
        </div>
    );
};
