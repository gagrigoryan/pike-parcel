export function updateAction(state: any, payload: any) {
    return {
        ...state,
        ...payload,
    };
}
