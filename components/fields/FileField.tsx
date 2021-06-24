import React from "react";
import styles from "../file-uploading/fileUploading.module.scss";
import clsx from "clsx";
import FileInput, { FileInputProps } from "../file-uploading/FileInput";
import FileUploaded from "../file-uploading/FileUploaded";

export type FileFieldProps = FileInputProps & {
    errors?: boolean;
    uploadedFiles: File[];
    onDelete: (fileIndex: number) => void;
};

export const FileField: React.FC<FileFieldProps> = ({
    name,
    errors,
    onAddFile,
    uploadedFiles,
    onDelete,
    className,
    ...props
}) => {
    return (
        <div className={clsx(styles.container, className)}>
            {uploadedFiles.map((file, index) => (
                <FileUploaded key={index} name={file.name} onDelete={() => onDelete(index)} />
            ))}
            <FileInput onAddFile={onAddFile} name={name} {...props} />
            {errors && (
                <p role="alert" className={styles.error}>
                    Не удалось загрузить файл
                </p>
            )}
        </div>
    );
};
