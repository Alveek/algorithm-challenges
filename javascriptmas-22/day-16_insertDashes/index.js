function insertDashes(arr) {
  const res = [];
  let splited = arr.split(" ");
  splited.forEach((word) => res.push(word.split("").join("-")));
  return res.join(" ");
}

/**
 * Test Suite
 */
describe("insertDashes()", () => {
  it("insert dashes in between chars", () => {
    // arrange
    const value = "aba caba";

    // act
    const result = insertDashes(value);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe("a-b-a c-a-b-a");
  });
});
