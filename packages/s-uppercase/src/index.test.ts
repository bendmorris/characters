import char from "./";
const expected = "S";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
