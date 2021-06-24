import { checkAtLeastTwoWords } from "../checkAtLeastTwoWords";

describe("checkAtLeastTwoWords", () => {
    it("returns true for more than one word", () => {
        expect(checkAtLeastTwoWords("test test")).toBeTruthy;
    });
    it("returns false for one word", () => {
        expect(checkAtLeastTwoWords("test")).toBeFalsy;
    });
    it("returns false for one word with space", () => {
        expect(checkAtLeastTwoWords("test ")).toBeFalsy;
    });
});
