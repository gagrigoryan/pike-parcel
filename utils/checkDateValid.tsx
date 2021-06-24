import isMatch from "date-fns/isMatch";

export const checkDateValid = (date: unknown, format: string = "dd.MM.yyyy"): boolean => {
    return typeof date === "string" ? isMatch(date, format) : false;
};
