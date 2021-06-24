import React from "react";
import { components } from "react-select";
import clsx from "clsx";
import styles from "../select/select.module.scss";
import Arrow from "../icons/Arrow";

export const DropdownIndicatorComponent = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
            <Arrow />
        </components.DropdownIndicator>
    );
};

export const ControlComponent = (props: any) => {
    return <components.Control {...props} className={clsx(styles.input, props.error && styles.inputError)} />;
};

export const ValueContainerComponent = (props: any) => {
    return <components.ValueContainer {...props} className={styles.valueContainer} />;
};

export const DropdownMenuComponent = (props: any) => {
    return (
        <components.Menu {...props} className={styles.menuContainer}>
            <div className={styles.shadowContainer} />
            {props.children}
        </components.Menu>
    );
};
