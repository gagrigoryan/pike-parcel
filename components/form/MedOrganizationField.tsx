import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { AutosuggestField } from "../fields/AutosuggestField";
import { SelectOption } from "../../domain/value-objects/SelectOption";
import { createMedOrganizationOptions } from "../../domain/services/createMedOrganizationOptions";
import { getMedOrganization } from "../../api/api";

type MedOrganizationFieldProps = {
    region: string;
};

export const MedOrganizationLabel = "Название медицинской организации*";

export const MedOrganizationField: React.FC<ControlledFieldProps & MedOrganizationFieldProps> = ({
    control,
    name,
    region,
    ...props
}) => {
    const promiseOptions = async (inputValue: string): Promise<SelectOption[] | undefined> => {
        const [url, options] = getMedOrganization({ region, substring: inputValue });
        const response = await fetch(url, options);

        if (!response.ok) {
            throw Error(response.statusText);
        }

        return createMedOrganizationOptions(await response.json());
    };

    return (
        <AutosuggestField
            {...props}
            control={control}
            name={name}
            label={MedOrganizationLabel}
            loadOptions={promiseOptions}
            rules={{
                required: "Укажите название медицинской организации так, как оно указано в вашей мед. документации.",
            }}
        />
    );
};
