import char from "./";
const expected = "a";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
