import { IdentityDocumentNumber } from "../value-objects/IdentityDocument";

export type SubmittedData = {
    region_id: number;
    fio: string;
    birhtday: string;
    fio2?: string;
    document: IdentityDocumentNumber;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    period_from: string;
    period_to: string;
    med_organization: string;
    med_organization_code: string;
    med_organization_address: string;
    desiease?: string;
    desiease_code?: string;
    quality_text: string[];
    help_text: string[];
    other_help?: string;
    files?: any;
    problem: string;
};
