import "little-state-machine";
import { TFormStep1, TFormStep2, TFormStep3, FieldsEnum, TFormStep4 } from "./domain/value-objects/Form";
import { RoutesEnum } from "./domain/value-objects/Routes";

declare module "little-state-machine" {
    interface GlobalState {
        name?: TFormStep1.name;
        birthdate?: TFormStep1.birthdate;
        region?: TFormStep1.region;
        confidant_name?: TFormStep1.confidantName;
        identity_document?: TFormStep1.identityDocument;
        document_id?: TFormStep1.documentId;
        email?: TFormStep1.email;
        phone?: TFormStep1.phone;
        address?: TFormStep1.address;
        consent_inform?: TFormStep1.consentInform;
        consent_personal_data?: TFormStep1.consentPersonalData;
        medical_care_dates?: TFormStep2.medicalCareDates;
        medical_care_dates?: {
            from?: TFormStep2.medicalCareDatesFrom;
            to?: TFormStep2.medicalCareDatesTo;
        };
        medorg?: TFormStep2.medorg;
        diagnosis?: TFormStep2.diagnosis;
        diagnosis_code?: TFormStep2.diagnosisCode;
        problem_field?: TFormStep3.problem;
        quality?: {
            prescribed_diagnostic_methods?: QualityEnum.prescribedDiagnosticMethods;
            exposed_diagnosis?: QualityEnum.exposedDiagnosis;
            prescribed_treatments?: QualityEnum.prescribedTreatments;
            timeliness?: QualityEnum.timeliness;
            treatment_result?: QualityEnum.treatmentResult;
            treatment_duration?: QualityEnum.treatmentDuration;
            recommendations_contents?: QualityEnum.recommendationsContents;
            medical_service_waiting?: QualityEnum.medicalServiceWaiting;
            hospitalization_waiting?: QualityEnum.hospitalizationWaiting;
            refuse?: QualityEnum.refuse;
            other?: QualityEnum.other;
        };
        help?: {
            expert_opinion?: HelpEnum.expertOpinion;
            assistance?: HelpEnum.assistance;
            other?: HelpEnum.other;
        };
        other_help?: TFormStep4.otherHelp;
        maxStep?: RoutesEnum;
    }
}
