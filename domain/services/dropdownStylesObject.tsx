import styles from "../../styles/vars.module.scss";
import { GroupTypeBase, Styles } from "react-select";

export const dropdownStyles = (focused: boolean, error: boolean): Partial<Styles<any, false, GroupTypeBase<any>>> => {
    const colorRed = styles.colorRed;
    const colorBlack = styles.colorBlack;
    const colorGrey3 = styles.colorGrey3;
    const colorGrey4 = styles.colorGrey4;

    const controlStyles = focused && {
        borderBottom: `1px solid ${colorGrey3}`,
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        "&:hover": {
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
        },
    };

    return {
        control: (styles: any) => ({
            ...styles,
            ...controlStyles,
            borderColor: error && colorRed,
        }),
        option: (styles: any, state: any) => ({
            ...styles,
            fontWeight: state.isSelected && 500,
            color: colorBlack,
            backgroundColor: "none",
            padding: "14px 16px",
            "&:hover": {
                backgroundColor: colorGrey4,
            },
        }),
        menuList: (styles: any) => ({
            ...styles,
            maxHeight: "264px",
            padding: 0,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: focused && "#fff",
        }),
        indicatorsContainer: (styles: any) => ({
            ...styles,
            transform: focused && `rotate(180deg)`,
        }),
        noOptionsMessage: (styles: any) => ({
            ...styles,
            fontWeight: 500,
            color: colorBlack,
            textAlign: "left",
            padding: "16px",
        }),
    };
};
