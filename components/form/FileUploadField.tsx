import React, { useState } from "react";
import { FileField, FileFieldProps } from "../fields/FileField";
import styles from "../file-uploading/fileUploading.module.scss";

const checkFileSize = (file: File): boolean => {
    return file.size / 1024 / 1024 < 5;
};

export const FileUploadField: React.FC<FileFieldProps> = ({ name, onAddFile, uploadedFiles, onDelete }) => {
    const [errors, setErrors] = useState<boolean>(false);

    const onAddFiles = (newFiles: File[]) => {
        setErrors(false);
        const files: File[] = [];
        newFiles.forEach((newFile, index) => {
            if (checkFileSize(newFile) && uploadedFiles.length + index < 3) {
                files.push(newFile);
            } else {
                setErrors(true);
            }
        });
        onAddFile(files);
    };

    return (
        <>
            <div className={styles.heading}>
                <h3 className={styles.title}>Загрузите файлы</h3>
                <span className={styles.prompt}>(не обязательно)</span>
            </div>
            <p className={styles.text}>
                Заключения врачей, результаты исследований или другие материалы, которые могут быть полезны при
                рассмотрение обращения. Можно загрузить фото, pdf, word, excel. Максимальный общий вес файлов — не более
                15 мб.
            </p>
            <FileField
                name={name}
                onAddFile={onAddFiles}
                errors={errors}
                uploadedFiles={uploadedFiles}
                onDelete={onDelete}
            />
        </>
    );
};
