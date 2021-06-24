import React from "react";
import { Controller } from "react-hook-form";
import { GlobalState } from "little-state-machine";
import { Checkbox } from "../checkbox/Checkbox";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import styles from "./form.module.scss";
import { getStateValueByDoubleKeyString } from "../../utils/getStateValueByDoubleKeyString";

export const HelpFieldLabel = "Качество медицинской помощи:";

type HelpFieldProps = ControlledFieldProps & {
    items: { [key: string]: string };
    error: boolean;
    state: GlobalState;
};

export const HelpField: React.FC<HelpFieldProps> = ({ control, items, error, state }) => {
    return (
        <div>
            {error && (
                <p role="alert" className={styles.checkboxesError}>
                    Выберите хотя бы 1 вариант из списка ниже
                </p>
            )}
            <div className={styles.qualityCheckboxesSection}>
                <div className={styles.checkboxes}>
                    {Object.keys(items).map((key) => {
                        return (
                            <Controller
                                key={key}
                                render={({ field }) => <Checkbox {...field} label={items[key]} />}
                                name={key}
                                control={control}
                                defaultValue={getStateValueByDoubleKeyString(key, state) || false}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
