import { GlobalState } from "little-state-machine";
import { SelectOption } from "./SelectOption";

export enum QualityEnum {
    prescribedDiagnosticMethods = "quality.prescribed_diagnostic_methods",
    exposedDiagnosis = "quality.exposed_diagnosis",
    prescribedTreatments = "quality.prescribed_treatments",
    timeliness = "quality.timeliness",
    treatmentResult = "quality.treatment_result",
    treatmentDuration = "quality.treatment_duration",
    recommendationsContents = "quality.recommendations_contents",
    medicalServiceWaiting = "quality.medical_service_waiting",
    hospitalizationWaiting = "quality.hospitalization_waiting",
    refuse = "quality.refuse",
    other = "quality.other",
}

export enum FieldsEnum {
    region = "region",
    name = "name",
    birthdate = "birthdate",
    confidantName = "confidant_name",
    identityDocument = "identity_document",
    documentId = "document_id",
    email = "email",
    phone = "phone",
    consentInform = "consent_inform",
    consentPersonalData = "consent_personal_data",
    medicalCareDates = "medical_care_dates",
    medicalCareDatesFrom = "medical_care_dates.from",
    medicalCareDatesTo = "medical_care_dates.to",
    medorg = "medorg",
    diagnosis = "diagnosis",
    diagnosisCode = "diagnosis_code",
    problem = "problem_field",
    address = "address",
    otherHelp = "other_help",
}

export enum HelpEnum {
    expertOpinion = "help.expert_opinion",
    assistance = "help.assistance",
    other = "help.other",
}

export type TFormStep1 = {
    [FieldsEnum.region]: SelectOption;
    [FieldsEnum.name]: string;
    [FieldsEnum.birthdate]: string;
    [FieldsEnum.confidantName]?: string;
    [FieldsEnum.identityDocument]: SelectOption;
    [FieldsEnum.documentId]: string;
    [FieldsEnum.email]: string;
    [FieldsEnum.phone]: string;
    [FieldsEnum.consentInform]: boolean;
    [FieldsEnum.consentPersonalData]: boolean;
    [FieldsEnum.address]: string;
};

export type TFormStep2 = {
    [FieldsEnum.medicalCareDatesFrom]: string;
    [FieldsEnum.medicalCareDatesTo]: string;
    [FieldsEnum.medorg]: SelectOption;
    [FieldsEnum.diagnosis]?: string;
    [FieldsEnum.diagnosisCode]?: string;
};

export type TFormStep3 = {
    [QualityEnum.prescribedDiagnosticMethods]: boolean;
    [QualityEnum.exposedDiagnosis]: boolean;
    [QualityEnum.prescribedTreatments]: boolean;
    [QualityEnum.timeliness]: boolean;
    [QualityEnum.treatmentResult]: boolean;
    [QualityEnum.treatmentDuration]: boolean;
    [QualityEnum.recommendationsContents]: boolean;
    [QualityEnum.medicalServiceWaiting]: boolean;
    [QualityEnum.hospitalizationWaiting]: boolean;
    [QualityEnum.refuse]: boolean;
    [QualityEnum.other]: boolean;
    [FieldsEnum.problem]: string;
};

export type TFormStep4 = {
    [HelpEnum.expertOpinion]: boolean;
    [HelpEnum.assistance]: boolean;
    [HelpEnum.other]: boolean;
    [FieldsEnum.otherHelp]?: string;
};

export type TForm = TFormStep1 & TFormStep2 & TFormStep3 & TFormStep4;

export type FormProps = {
    actions: {
        updateAction: any;
        resetAction?: any;
    };
    state: GlobalState;
};

export const qualityItems = {
    [QualityEnum.prescribedDiagnosticMethods]: "Назначенные методы диагностики",
    [QualityEnum.exposedDiagnosis]: "Выставленный диагноз",
    [QualityEnum.prescribedTreatments]: "Назначенные методы лечения",
    [QualityEnum.timeliness]: "Своевременность диагностики и лечения",
    [QualityEnum.treatmentResult]: "Результат проведенного лечения",
    [QualityEnum.treatmentDuration]: "Длительность лечения",
    [QualityEnum.recommendationsContents]: "Содержание рекомендаций",
};

export const availabilityItems = {
    [QualityEnum.medicalServiceWaiting]: "Долгое ожидание медицинской услуги",
    [QualityEnum.hospitalizationWaiting]: "Долгое ожидание плановой госпитализации",
    [QualityEnum.refuse]: "Отказ в предоставлении медицинских услуг",
    [QualityEnum.other]: "Другое",
};

export const helpItems = {
    [HelpEnum.expertOpinion]:
        "Экспертное мнение - оценка доступности и качества медицинской помощи с рекомендациями по дальнейшему лечению",
    [HelpEnum.assistance]: "Содействие в получении медицинских услуг, записи на прием к врачу, плановой госпитализации",
    [HelpEnum.other]: "Другое",
};
