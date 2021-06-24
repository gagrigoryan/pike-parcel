export enum IdentityDocumentEnum {
    snils = "snils",
    russianPassport = "russian_passport",
    foreignPassport = "foreign_passport",
    residence = "residence",
}

export type IdentityDocumentNumber = 1 | 2 | 3 | 4;

const IdentityDocumentValues: { [key: string]: IdentityDocumentNumber } = {
    [IdentityDocumentEnum.snils]: 1,
    [IdentityDocumentEnum.russianPassport]: 2,
    [IdentityDocumentEnum.foreignPassport]: 3,
    [IdentityDocumentEnum.residence]: 4,
};

export const getIdentityDocumentNumber = (identityDocument: IdentityDocumentEnum): IdentityDocumentNumber => {
    return IdentityDocumentValues[identityDocument];
};
