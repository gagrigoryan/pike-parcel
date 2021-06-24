import * as React from "react";
import styles from "./fileUploading.module.scss";
import { Button, ButtonStyleEnum } from "../button/Button";

export type FileInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name: string;
    className?: string;
    onAddFile: (files: File[]) => void;
};

const FileInput: React.FC<FileInputProps> = ({ name, onAddFile }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleAddFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        onAddFile(Array.prototype.slice.call(event.target.files));
        event.target.value = "";
    };

    const onClick = () => {
        const input = inputRef.current as HTMLInputElement;
        input.click();
    };

    return (
        <div className={styles.inputContainer}>
            {/* eslint-disable-next-line jsx-a11y/aria-role */}
            <label role="file-field">
                <input
                    ref={inputRef}
                    name={name}
                    type="file"
                    multiple
                    className={styles.input}
                    onChange={handleAddFile}
                    accept="image/png, image/jpeg, .pdf, .rtf, .doc, .docx, .xls, .xlsx"
                />
                <Button className={styles.button} onClick={onClick} style={ButtonStyleEnum.White}>
                    Загрузить файлы
                </Button>
            </label>
        </div>
    );
};

FileInput.displayName = "FileInput";
export default FileInput;
