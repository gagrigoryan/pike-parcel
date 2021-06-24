import React from "react";
import styles from "./fileUploading.module.scss";

type FileUploadedProps = {
    name: string;
    onDelete: () => void;
};

const FileUploaded: React.FC<FileUploadedProps> = ({ name, onDelete }) => {
    return (
        // eslint-disable-next-line jsx-a11y/aria-role
        <div className={styles.fileContainer} role="uploaded-file">
            <span className={styles.fileName}>{name}</span>
            <button onClick={onDelete} type="button" className={styles.deleteButton}>
                Удалить
            </button>
        </div>
    );
};

export default FileUploaded;
