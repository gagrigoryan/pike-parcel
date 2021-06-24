import React, { createContext, useContext, useState } from "react";

type AttachmentsContextType = {
    files: File[];
    addFiles: (fileList: File[]) => void;
    deleteFile: (index: number) => void;
};

const AttachmentStoreContext = createContext<AttachmentsContextType>({
    files: [],
    addFiles: () => {},
    deleteFile: () => {},
});

export const AttachmentStoreProvider: React.FC = ({ children }) => {
    const [files, setFiles] = useState<File[]>([]);

    const addFiles = (fileList: File[]) => setFiles([...files, ...fileList]);

    const deleteFile = (index: number) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles([...newFiles]);
    };

    return (
        <AttachmentStoreContext.Provider
            value={{
                files,
                addFiles,
                deleteFile,
            }}>
            {children}
        </AttachmentStoreContext.Provider>
    );
};

export const useAttachmentStore = () => useContext(AttachmentStoreContext);
