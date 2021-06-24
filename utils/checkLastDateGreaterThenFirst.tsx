import compareAsc from "date-fns/compareAsc";

export const checkLastDateGreaterThenFirst = (left: Date, right: Date): boolean => {
    return compareAsc(left, right) <= 0 ? true : false;
};
