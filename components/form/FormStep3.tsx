import React, { useEffect, useState } from "react";
import styles from "./form.module.scss";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { QualityField } from "../form/QualityField";
import { Button, ButtonStyleEnum } from "../button/Button";
import { ProblemField } from "./ProblemField";
import { FileUploadField } from "./FileUploadField";
import { RoutesEnum } from "../../domain/value-objects/Routes";
import { FieldsEnum, TFormStep3 } from "../../domain/value-objects/Form";
import { FormProps, qualityItems, availabilityItems } from "../../domain/value-objects/Form";
import { useAttachmentStore } from "../../utils/AttachmentStore";
import { useRouter } from "next/router";

export const FormStep3: React.FC<FormProps> = ({ actions, state }) => {
    const router = useRouter();
    const { control, handleSubmit, watch } = useForm({
        mode: "onBlur",
    });

    const { files, addFiles, deleteFile } = useAttachmentStore();

    const [hasError, setError] = useState(false);
    const qualityWatch = watch([...Object.keys(qualityItems), ...Object.keys(availabilityItems)]);

    const onSubmitForm = (data: TFormStep3) => {
        const isAtLeastOneQuality = qualityWatch.find((value) => value === true);
        if (!isAtLeastOneQuality) {
            setError(!isAtLeastOneQuality);
            return;
        }
        actions.updateAction({ ...data, maxStep: RoutesEnum.form4 });
        router.push(RoutesEnum.form4);
    };

    useEffect(() => {
        if (hasError) {
            const hasTrue = qualityWatch.find((value) => value === true);
            setError(!hasTrue);
        }
    }, [qualityWatch, hasError]);

    return (
        <>
            <form className={styles.step3Container} onSubmit={handleSubmit(onSubmitForm)}>
                <h2 className={styles.title}>Жалобы</h2>
                <p className={styles.step}>Шаг 3 из 4</p>
                <div className={styles.fields}>
                    <h3 className={styles.sectionTitle}>Что Вас не устроило при обращении за медицинской помощью?*</h3>
                    <QualityField
                        state={state}
                        control={control}
                        qualityItems={qualityItems}
                        availabilityItems={availabilityItems}
                        name="quality"
                        error={hasError}
                    />
                    <h3 className={styles.sectionTitle}>Опишите суть проблемы</h3>
                    <ProblemField
                        defaultValue={state && state[FieldsEnum.problem]}
                        control={control}
                        name={FieldsEnum.problem}
                    />
                    <FileUploadField
                        name="file-field"
                        onAddFile={addFiles}
                        uploadedFiles={files}
                        onDelete={deleteFile}
                    />
                </div>
                <div className={styles.buttons}>
                    <Button
                        style={ButtonStyleEnum.White}
                        onClick={() => {
                            router.push(RoutesEnum.form2);
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
