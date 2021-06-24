import { MedOrganization } from "../value-objects/MedOrganization";
import { SelectOption } from "../value-objects/SelectOption";

export const createMedOrganizationOptions = (items?: any): SelectOption[] | undefined => {
    if (!items) return;
    const options = items.map((item: unknown) => {
        return { value: item as MedOrganization, label: (item as MedOrganization).title || "" };
    });
    return options;
};
