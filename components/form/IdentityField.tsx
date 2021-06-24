import React from "react";
import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { SnilsField } from "./SnilsField";
import { PassportField } from "./PassportField";
import { ForeignPassportField } from "./ForeignPassportField";
import { ResidenceField } from "./ResidenceField";

export enum IdentityFieldTypeEnum {
    snils = "snils",
    russian_passport = "russian_passport",
    foreign_passport = "foreign_passport",
    residence = "residence",
}

type TIdentityFieldsItem = {
    [key in IdentityFieldTypeEnum]: (props: ControlledFieldProps) => React.ReactElement;
};

type IdentityFieldProps = ControlledFieldProps & {
    type: IdentityFieldTypeEnum;
};

const identityFields: TIdentityFieldsItem = {
    /* eslint-disable react/display-name */
    snils: (props) => <SnilsField {...props} key={1} />,
    russian_passport: (props) => <PassportField {...props} key={2} />,
    foreign_passport: (props) => <ForeignPassportField {...props} key={3} />,
    residence: (props) => <ResidenceField {...props} key={4} />,
};

export const IdentityField: React.FC<IdentityFieldProps> = ({ type, ...props }) => {
    const Field = identityFields[type];

    return <Field {...props} />;
};
