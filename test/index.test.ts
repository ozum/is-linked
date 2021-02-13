import isLinked from "../src";

describe("isLinked", () => {
  it("should detect if top-most package is not linked.", async () => {
    expect(await isLinked()).toBe(false);
  });

  it("should detect if a module is not linked.", async () => {
    expect(await isLinked("some-module")).toBe(false);
  });
});
