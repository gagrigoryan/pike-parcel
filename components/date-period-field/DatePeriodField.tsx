import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { GlobalState } from "little-state-machine";
import { FieldError } from "react-hook-form";
import styles from "./datePeriodField.module.scss";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { checkLastDateGreaterThenFirst } from "../../utils/checkLastDateGreaterThenFirst";
import { parseShortDate } from "../../utils/parseShortDate";
import { ShortDateField } from "../fields/ShortDateField";
import { FieldsEnum } from "../../domain/value-objects/Form";
import { getStateValueByDoubleKeyString } from "../../utils/getStateValueByDoubleKeyString";
import { format } from "date-fns";

export const DatePeriodFieldLabel = "Период оказания медицинской помощи*";

type FieldProps = ControlledFieldProps & {
    state: GlobalState;
    onHandleError: (value: boolean) => void;
};

export const DatePeriodField: React.FC<FieldProps> = ({ control, watch, state, onHandleError }) => {
    const [periodError, setPeriodError] = useState<boolean>(false);

    const watchPeriodFrom = watch(FieldsEnum.medicalCareDatesFrom);
    const watchPeriodTo = watch(FieldsEnum.medicalCareDatesTo);

    useEffect(() => {
        if (watchPeriodFrom && watchPeriodTo && watchPeriodFrom.length === 7 && watchPeriodTo.length === 7) {
            const fromDate = parseShortDate(watchPeriodFrom);
            const toDate = parseShortDate(watchPeriodTo);
            const today = parseShortDate(format(new Date(), "MM.yyyy.dd"));
            const isDatesValid =
                checkLastDateGreaterThenFirst(fromDate, today) &&
                checkLastDateGreaterThenFirst(toDate, today) &&
                checkLastDateGreaterThenFirst(fromDate, toDate);
            setPeriodError(!isDatesValid);
            onHandleError(!isDatesValid);
        }
    }, [watchPeriodFrom, watchPeriodTo, onHandleError]);

    const handleError = (error: FieldError | undefined) => {
        setPeriodError(!!error);
    };

    return (
        <label className={styles.container} data-testid={FieldsEnum.medicalCareDates}>
            <span className={styles.label}>{DatePeriodFieldLabel}</span>
            <div className={styles.wrapper}>
                <ShortDateField
                    defaultValue={getStateValueByDoubleKeyString(FieldsEnum.medicalCareDatesFrom, state)}
                    control={control}
                    name={FieldsEnum.medicalCareDatesFrom}
                    onHandleError={handleError}
                    label={DatePeriodFieldLabel}
                    className={clsx(periodError && styles.inputError)}
                    rules={{
                        required: true,
                    }}
                />
                <span className={styles.separator}>–</span>
                <ShortDateField
                    defaultValue={getStateValueByDoubleKeyString(FieldsEnum.medicalCareDatesTo, state)}
                    control={control}
                    name={FieldsEnum.medicalCareDatesTo}
                    onHandleError={handleError}
                    label={DatePeriodFieldLabel}
                    className={clsx(periodError && styles.inputError)}
                    rules={{
                        required: true,
                    }}
                />
            </div>
            {periodError && (
                <span role="alert" className={styles.error}>
                    {"Укажите месяц и год начала и окончания оказания помощи"}
                </span>
            )}
            <span className={styles.prompt}>
                Если помощь оказывается в данный момент, во втором поле укажите текущий месяц и год
            </span>
        </label>
    );
};
