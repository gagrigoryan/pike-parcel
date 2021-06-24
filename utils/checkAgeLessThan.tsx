import parse from "date-fns/parse";
import { differenceInYears } from "date-fns";

export const checkAgeLessThan = (date: string, age: number): boolean => {
    const parsedDate = parse(date, "dd.MM.yyyy", new Date());

    return differenceInYears(new Date(), parsedDate) < age;
};
