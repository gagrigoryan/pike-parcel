import React, { useEffect, useState } from "react";
import styles from "./form.module.scss";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { HelpField } from "../form/HelpField";
import { TextareaField } from "../fields/TextareaField";
import { Button, ButtonStyleEnum } from "../button/Button";
import { RoutesEnum, StepRouteList } from "../../domain/value-objects/Routes";
import { HelpEnum, FieldsEnum, TFormStep4 } from "../../domain/value-objects/Form";
import { FormProps, helpItems } from "../../domain/value-objects/Form";
import { prepareStateDataBeforeSubmit } from "../../domain/services/prepareStateDataBeforeSubmit";
import { postForm } from "../../api/api";
import { useAttachmentStore } from "../../utils/AttachmentStore";
import { Loading } from "../loading/Loading";
import { Success } from "../success/Success";
import { Error } from "../error/Error";

export const FormStep4: React.FC<FormProps> = ({ actions, state }) => {
    const { files } = useAttachmentStore();

    const { control, handleSubmit, watch } = useForm({
        mode: "onBlur",
    });

    const [hasError, setError] = useState(false);
    const [isOtherFieldShown, setOtherFieldShown] = useState(false);
    const [readyToSend, setReadyToSend] = useState(false);

    const [loading, setLoading] = useState(false);
    const [formSuccessId, setFormSuccessId] = useState<string | null>(null);
    const [formError, setFormError] = useState(false);

    const onSuccess = (value: { id: string }) => {
        setFormSuccessId(value.id);
    };

    const sendForm = async () => {
        const preparedData = await prepareStateDataBeforeSubmit(state, files);
        console.log(preparedData);

        try {
            const id = await postForm({ data: preparedData });
            actions.updateAction({ maxStep: RoutesEnum.success });
            onSuccess(id);
        } catch (error) {
            actions.updateAction({ maxStep: RoutesEnum.error });
            setFormError(true);
        }

        actions.resetAction && actions.resetAction();
    };

    const checkboxesWatch = watch([...Object.keys(helpItems)]);
    const otherWatch = watch(HelpEnum.other);

    const onSubmitForm = async (data: TFormStep4) => {
        const isAtLeastOneQuality = checkboxesWatch.find((value) => value === true);
        if (!isAtLeastOneQuality) {
            setError(!isAtLeastOneQuality);
            return;
        }
        actions.updateAction({ ...data, maxStep: RoutesEnum.loading });
        setReadyToSend(true);
        setLoading(true);
    };

    useEffect(() => {
        if (hasError) {
            const hasTrue = checkboxesWatch.find((value) => value === true);
            setError(!hasTrue);
        }
    }, [checkboxesWatch, hasError]);

    useEffect(() => {
        setOtherFieldShown(otherWatch);
    }, [otherWatch]);

    useEffect(() => {
        if (readyToSend === true) {
            sendForm();
        }
        // eslint-disable-next-line
    }, [readyToSend]);

    return (
        <>
            {formSuccessId ? (
                <Success id={formSuccessId} />
            ) : formError ? (
                <Error />
            ) : loading ? (
                <Loading />
            ) : (
                <form className={styles.step4Container} onSubmit={handleSubmit(onSubmitForm)}>
                    <h2 className={styles.title}>Обращение</h2>
                    <p className={styles.step}>Шаг 4 из 4</p>
                    <div className={styles.fields}>
                        <h3 className={styles.sectionTitle}>
                            Какую помощь Вы бы хотели получить от&nbsp;страховой компании?*
                        </h3>
                        <HelpField state={state} control={control} items={helpItems} name="help" error={hasError} />
                        {isOtherFieldShown && (
                            <TextareaField
                                defaultValue={state[FieldsEnum.otherHelp]}
                                shouldUnregister={true}
                                label=""
                                control={control}
                                name={FieldsEnum.otherHelp}
                                rules={{
                                    required: "Заполните поле",
                                }}
                            />
                        )}
                    </div>
                    <div className={styles.buttons}>
                        <Button style={ButtonStyleEnum.White} type="button">
                            Назад
                        </Button>
                        <Button style={ButtonStyleEnum.Primary} type="submit">
                            Отправить
                        </Button>
                    </div>
                </form>
            )}
        </>
    );
};
