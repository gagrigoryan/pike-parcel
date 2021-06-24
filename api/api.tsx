import { SubmittedData } from "../domain/value-objects/SubmittedData";

// TO DO refactor
// const API_URL = process.env.REACT_APP_API_URL;
const API_URL =
    process.env.REACT_APP_ENV === "production"
        ? "https://api.helpline.alfastrahoms.ru"
        : "https://api.alfa-oms-dev.redis.tv";

export enum MethodEnum {
    POST = "POST",
    GET = "GET",
}

export type Request = {
    path: string;
    method: MethodEnum;
    // eslint-disable-next-line @typescript-eslint/ban-types
    body?: object;
};

const COMMON_FETCH_OPTIONS = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
    },
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const getRegions = (): [string, Object] => {
    return [
        `${API_URL}/regions`,
        {
            ...COMMON_FETCH_OPTIONS,
            headers: {
                ...COMMON_FETCH_OPTIONS.headers,
            },
        },
    ];
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const getMedOrganization = (options: { region: string; substring?: string }): [string, Object] => {
    const url = new URL(`${API_URL}/medorg`);
    url.search = new URLSearchParams(options).toString();
    return [
        url.toString(),
        {
            ...COMMON_FETCH_OPTIONS,
            headers: {
                ...COMMON_FETCH_OPTIONS.headers,
            },
        },
    ];
};

export const postForm = async (options: { data: SubmittedData }): Promise<any> => {
    const response = await fetch(`${API_URL}/application`, {
        ...COMMON_FETCH_OPTIONS,
        method: MethodEnum.POST,
        body: JSON.stringify(options.data),
        headers: {
            ...COMMON_FETCH_OPTIONS.headers,
        },
    });
    if (response.status === 403) {
        return;
    }
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
};
