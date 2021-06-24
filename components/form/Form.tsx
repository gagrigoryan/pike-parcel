import React, { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./form.module.scss";
import useFetch from "react-fetch-hook";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { NameField } from "./NameField";
import { BirthDateField } from "./BirthDateField";
import { RegionField } from "./RegionField";
import { IdentityDocumentField, IdentityDocumentOptions } from "./IdentityDocumentField";
import { ConsentField } from "./ConsentField";
import { Button, ButtonStyleEnum } from "../button/Button";
import { getRegions } from "../../api/api";
import EmailField from "./EmailField";
import { createRegionsOptions } from "../../domain/services/createRegionsOptions";
import { Region } from "../../domain/value-objects/Region";
import { TFormStep1, FieldsEnum } from "../../domain/value-objects/Form";
import { IdentityField } from "./IdentityField";
import { PhoneField } from "./PhoneField";
import { ConfidantNameField } from "./ConfidantNameField";
import { checkAgeLessThan } from "../../utils/checkAgeLessThan";
import { RoutesEnum } from "../../domain/value-objects/Routes";
import { FormProps } from "../../domain/value-objects/Form";
import { AddressField } from "./AddressField";
import { IdentityDocumentEnum } from "../../domain/value-objects/IdentityDocument";
import { useRouter } from "next/router";

export const Form: React.FC<FormProps> = ({ actions, state }) => {
    const router = useRouter();
    const [isConfidantFieldShow, setConfidantFieldShow] = useState<boolean>(false);

    const { control, handleSubmit, setValue, clearErrors, watch, trigger } = useForm({
        mode: "onBlur",
    });

    const watchBirthDate = watch(FieldsEnum.birthdate);
    const watchConcentInform = watch(FieldsEnum.consentInform);
    const watchConsentPersonalData = watch(FieldsEnum.consentPersonalData);

    useEffect(() => {
        setConfidantFieldShow(checkAgeLessThan(watchBirthDate, 18));
    }, [watchBirthDate]);

    useEffect(() => {
        trigger([FieldsEnum.consentInform, FieldsEnum.consentPersonalData]);
    }, [watchConcentInform, watchConsentPersonalData, trigger]);

    const { data: regions } = useFetch<Region[]>(...getRegions());

    const onSubmitForm = (data: TFormStep1) => {
        actions.updateAction({ ...data, maxStep: RoutesEnum.form2 });
        router.push(RoutesEnum.form2);
    };

    const onIdentitySelect = (item: any) => {
        actions.updateAction({ ...state, identity_document: item });
        setValue("document_id", "");
        clearErrors("document_id");
    };

    return (
        <>
            <form className={styles.container} onSubmit={handleSubmit(onSubmitForm)}>
                <h2 className={styles.title}>Персональные данные</h2>
                <p className={styles.step}>Шаг 1 из 4</p>
                <div className={styles.fields}>
                    <RegionField
                        defaultValue={state && state[FieldsEnum.region]}
                        control={control}
                        name={FieldsEnum.region}
                        options={createRegionsOptions(regions)}
                    />
                    <NameField
                        defaultValue={state && state[FieldsEnum.name]}
                        control={control}
                        name={FieldsEnum.name}
                    />
                    <BirthDateField
                        defaultValue={state && state[FieldsEnum.birthdate]}
                        control={control}
                        name={FieldsEnum.birthdate}
                    />
                    {isConfidantFieldShow && (
                        <ConfidantNameField
                            defaultValue={state && state[FieldsEnum.confidantName]}
                            control={control}
                            name={FieldsEnum.confidantName}
                        />
                    )}
                    <IdentityDocumentField
                        defaultValue={
                            state && state[FieldsEnum.identityDocument]
                                ? state[FieldsEnum.identityDocument]
                                : IdentityDocumentOptions[0]
                        }
                        control={control}
                        name={FieldsEnum.identityDocument}
                        onSelect={onIdentitySelect}
                    />
                    <IdentityField
                        defaultValue={state && state[FieldsEnum.documentId]}
                        control={control}
                        name={FieldsEnum.documentId}
                        type={
                            state && state[FieldsEnum.identityDocument]
                                ? state[FieldsEnum.identityDocument].value
                                : IdentityDocumentEnum.snils
                        }
                    />
                    <EmailField
                        defaultValue={state && state[FieldsEnum.email]}
                        control={control}
                        name={FieldsEnum.email}
                    />
                    <PhoneField
                        defaultValue={state && state[FieldsEnum.phone]}
                        control={control}
                        name={FieldsEnum.phone}
                    />
                </div>
                <div className={styles.addressSection}>
                    <h3 className={styles.addressHeader}>Почтовый адрес</h3>
                    <AddressField
                        defaultValue={state && state[FieldsEnum.address]}
                        control={control}
                        name={FieldsEnum.address}
                    />
                </div>
                <div className={clsx(styles.checkboxes, styles.checkboxesSection)}>
                    <ConsentField
                        control={control}
                        label="Я подтверждаю своё согласие на информирование указанными каналами связи (e-mail, телефон)"
                        errorMessage="Подтвердите согласие на информирование"
                        name={FieldsEnum.consentInform}
                    />
                    <ConsentField
                        control={control}
                        label={
                            <span>
                                Я подтверждаю своё согласие на
                                <a
                                    className={styles.link}
                                    href="https://alfastrahoms.ru/about/politika-v-oblasti-obrabotki-i-zpd/"
                                    target="_blank"
                                    rel="noreferrer">
                                    обработку, хранение и использование персональных данных
                                </a>
                            </span>
                        }
                        errorMessage="Подтвердите согласие на обработку персональных данных"
                        name={FieldsEnum.consentPersonalData}
                    />
                </div>
                <div className={styles.buttons}>
                    <Button style={ButtonStyleEnum.White} type="button" onClick={() => console.log("CLick")}>
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
