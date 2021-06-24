export const checkAtLeastTwoWords = (value: string): boolean => {
    return value.trim().split(" ").length >= 2;
};
