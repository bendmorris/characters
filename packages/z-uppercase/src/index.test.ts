import char from "./";
const expected = "Z";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
