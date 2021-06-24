import React from "react";
import { GlobalState } from "little-state-machine";
import { Controller } from "react-hook-form";
import { Checkbox } from "../checkbox/Checkbox";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import styles from "./form.module.scss";
import { getStateValueByDoubleKeyString } from "../../utils/getStateValueByDoubleKeyString";

export const QualityFieldLabel = "Качество медицинской помощи:";

type QualityFieldProps = ControlledFieldProps & {
    qualityItems: { [key: string]: string };
    availabilityItems: { [key: string]: string };
    error: boolean;
    state: GlobalState;
};

export const QualityField: React.FC<QualityFieldProps> = ({
    control,
    qualityItems,
    availabilityItems,
    error,
    state,
}) => {
    return (
        <div>
            {error && (
                <p role="alert" className={styles.checkboxesError}>
                    Выберите хотя бы 1 вариант из списка ниже
                </p>
            )}
            <div className={styles.qualityCheckboxesSection}>
                <p className={styles.checkboxesLabel}>Качество медицинской помощи:</p>
                <div className={styles.checkboxes}>
                    {Object.keys(qualityItems).map((key) => {
                        return (
                            <Controller
                                key={key}
                                render={({ field }) => <Checkbox {...field} label={qualityItems[key]} />}
                                name={key}
                                control={control}
                                defaultValue={getStateValueByDoubleKeyString(key, state) || false}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={styles.qualityCheckboxesSection}>
                <p className={styles.checkboxesLabel}>Доступность медицинской помощи:</p>
                <div className={styles.checkboxes}>
                    {Object.keys(availabilityItems).map((key) => {
                        return (
                            <Controller
                                key={key}
                                render={({ field }) => <Checkbox {...field} label={availabilityItems[key]} />}
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
