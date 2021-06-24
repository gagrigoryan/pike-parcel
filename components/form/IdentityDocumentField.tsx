import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { DropdownField } from "../fields/DropdownField";
import { IdentityDocumentEnum } from "../../domain/value-objects/IdentityDocument";

export const IdentityDocumentOptions = [
    { value: IdentityDocumentEnum.snils, label: "СНИЛС" },
    { value: IdentityDocumentEnum.russianPassport, label: "Паспорт РФ" },
    { value: IdentityDocumentEnum.foreignPassport, label: "Паспорт иностранного гражданина" },
    { value: IdentityDocumentEnum.residence, label: "Вид на жительство" },
];

export const IdentityDocumentLabel = "Документ, удостоверяющий личность*";

type IdentityDocumentFieldProps = ControlledFieldProps & {
    onSelect?: (item: any) => void;
};

export const IdentityDocumentField: React.FC<IdentityDocumentFieldProps> = ({
    control,
    name,
    defaultValue,
    onSelect,
}) => {
    return (
        <DropdownField
            control={control}
            name={name}
            label={IdentityDocumentLabel}
            options={IdentityDocumentOptions}
            defaultOption={defaultValue}
            onSelect={onSelect}
        />
    );
};
