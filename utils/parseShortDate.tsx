export const parseShortDate = (date: string): Date => {
    const [month, year] = date.split(".");
    return new Date(parseInt(year), parseInt(month));
};
