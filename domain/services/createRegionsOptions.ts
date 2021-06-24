import { Region } from "../value-objects/Region";
import { SelectOption } from "../value-objects/SelectOption";

export const createRegionsOptions = (regions?: Region[]): SelectOption[] | undefined => {
    if (!regions) return;
    const options = regions.map((region) => {
        return { value: region.id, label: region.title };
    });
    return options;
};
