import { ControlledFieldProps } from "../fields/ControlledFieldProps";
import { DropdownField } from "../fields/DropdownField";
import { SelectOption } from "../../domain/value-objects/SelectOption";

type RegionFieldField = {
    options?: SelectOption[];
};

export const RegionFieldLabel = "Регион, в котором Вы получили полис ОМС*";

export const RegionField: React.FC<ControlledFieldProps & RegionFieldField> = ({
    control,
    name,
    options,
    ...props
}) => {
    return (
        <DropdownField
            {...props}
            control={control}
            name={name}
            label={RegionFieldLabel}
            options={options}
            rules={{
                required: "Укажите регион, в котором Вы получили полис ОМС",
            }}
        />
    );
};
