import { checkAgeLessThan } from "../checkAgeLessThan";

describe("checkAgeLessThan", () => {
    it("returns true for valid data", () => {
        expect(checkAgeLessThan("10.10.2000", 105)).toBeTruthy;
    });
    it("returns false for invalid data", () => {
        expect(checkAgeLessThan("test", 105)).toBeFalsy;
    });
    it("returns true for valid data", () => {
        expect(checkAgeLessThan("10.10.2000", 1)).toBeTruthy;
    });
});
