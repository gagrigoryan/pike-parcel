import { GlobalState } from "little-state-machine";
import { FieldsEnum, qualityItems, availabilityItems, helpItems } from "../value-objects/Form";
import { SubmittedData } from "../value-objects/SubmittedData";
import { getStateValueByDoubleKeyString } from "../../utils/getStateValueByDoubleKeyString";
import { getIdentityDocumentNumber } from "../value-objects/IdentityDocument";

const checkboxesToStringArray = (
    state: { [key: string]: any },
    keyName: string,
    keyValueObject: { [key: string]: string }
): string[] => {
    const filtered = Object.keys(state[keyName]).filter((key) => state[keyName][key] === true);
    return filtered.map((item) => keyValueObject[`${keyName}.${item}`]);
};

const prepareFiles = async (files: File[]) => {
    const toBase64 = (file: File): Promise<unknown> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const preparedFiles = [];
    for (let file of files) {
        const res = await toBase64(file);
        preparedFiles.push(res);
    }
    return preparedFiles;
};

export const prepareStateDataBeforeSubmit = async (state: GlobalState, files?: File[]): Promise<SubmittedData> => {
    return {
        region_id: state.region.value,
        fio: state[FieldsEnum.name],
        birhtday: state[FieldsEnum.birthdate],
        fio2: state[FieldsEnum.confidantName],
        document: getIdentityDocumentNumber(state[FieldsEnum.identityDocument].value),
        document_id: state[FieldsEnum.documentId],
        email: state[FieldsEnum.email],
        phone: state[FieldsEnum.phone],
        address: state[FieldsEnum.address],
        period_from: getStateValueByDoubleKeyString(FieldsEnum.medicalCareDatesFrom, state),
        period_to: getStateValueByDoubleKeyString(FieldsEnum.medicalCareDatesTo, state),
        med_organization: state[FieldsEnum.medorg].value.title,
        med_organization_code: state[FieldsEnum.medorg].value.code,
        med_organization_address: state[FieldsEnum.medorg].value.address,
        desiease: state[FieldsEnum.diagnosis],
        desiease_code: state[FieldsEnum.diagnosisCode],
        quality_text: state.quality
            ? checkboxesToStringArray(state, "quality", { ...qualityItems, ...availabilityItems })
            : [],
        help_text: state.help ? checkboxesToStringArray(state, "help", helpItems) : [],
        other_help: state[FieldsEnum.otherHelp],
        files: files ? await prepareFiles(files) : [],
        problem: state[FieldsEnum.problem],
    };
};
