import char from "./";
const expected = "C";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
