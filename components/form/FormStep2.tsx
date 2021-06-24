import React, { useState } from "react";
import styles from "./form.module.scss";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { MedOrganizationField } from "../form/MedOrganizationField";
import { Button, ButtonStyleEnum } from "../button/Button";
import { DatePeriodField } from "../date-period-field/DatePeriodField";
import { TFormStep2, FieldsEnum } from "../../domain/value-objects/Form";
import { TextField } from "../fields/TextField";
import { RoutesEnum } from "../../domain/value-objects/Routes";
import { FormProps } from "../../domain/value-objects/Form";
import { useRouter } from "next/router";

export const FormStep2: React.FC<FormProps> = ({ actions, state }) => {
    const router = useRouter();
    const [periodError, setPeriodError] = useState<boolean>(false);

    const { control, handleSubmit, watch } = useForm({
        mode: "onBlur",
    });

    const onSubmitForm = (data: TFormStep2) => {
        if (periodError) return;
        actions.updateAction({ ...data, maxStep: RoutesEnum.form3 });
        router.push(RoutesEnum.form3);
    };

    return (
        <>
            <form className={styles.step2Container} onSubmit={handleSubmit(onSubmitForm)}>
                <h2 className={styles.title}>Когда и куда Вы обращались за медицинской помощью?</h2>
                <p className={styles.step}>Шаг 2 из 4</p>
                <div className={styles.fields}>
                    <DatePeriodField
                        onHandleError={(error) => setPeriodError(error)}
                        state={state}
                        control={control}
                        watch={watch}
                        name={FieldsEnum.medicalCareDates}
                    />
                    <MedOrganizationField
                        defaultValue={state && state[FieldsEnum.medorg]}
                        control={control}
                        name={FieldsEnum.medorg}
                        region={state && state[FieldsEnum.region] && state[FieldsEnum.region].value}
                    />
                    <TextField
                        defaultValue={state && state[FieldsEnum.diagnosis]}
                        control={control}
                        name={FieldsEnum.diagnosis}
                        label="Диагноз"
                        labelComment="(Заполняется при наличии у Вас информации о диагнозе)"
                    />
                    <TextField
                        defaultValue={state && state[FieldsEnum.diagnosisCode]}
                        control={control}
                        name={FieldsEnum.diagnosisCode}
                        label="Код диагноза по МКБ-10"
                        labelComment="(Заполняется при наличии у Вас информации о коде диагноза по МКБ-10)"
                    />
                </div>
                <div className={styles.buttons}>
                    <Button
                        style={ButtonStyleEnum.White}
                        onClick={() => {
                            router.push(RoutesEnum.form);
                        }}
                        type="button">
                        Назад
                    </Button>
                    <Button style={ButtonStyleEnum.Primary} type="submit">
                        Далее
                    </Button>
                </div>
            </form>
        </>
    );
};
