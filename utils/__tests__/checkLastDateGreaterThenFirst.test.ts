import { checkLastDateGreaterThenFirst } from "../checkLastDateGreaterThenFirst";

describe("checkLastDateGreaterThenFirst", () => {
    it("returns true for valid data", () => {
        const firstDate = new Date(2000, 5);
        const lastDate = new Date(2000, 8);
        expect(checkLastDateGreaterThenFirst(firstDate, lastDate)).toBe(true);
    });
    it("returns false for invalid data", () => {
        const firstDate = new Date(2000, 5);
        const lastDate = new Date(1999, 5);
        expect(checkLastDateGreaterThenFirst(firstDate, lastDate)).toBe(false);
    });
});
