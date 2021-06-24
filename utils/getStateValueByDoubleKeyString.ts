export const getStateValueByDoubleKeyString = (keyString: string, state: any) => {
    const [a, b] = keyString.split(".");

    return state && state[a] ? state[a][b] : undefined;
};
