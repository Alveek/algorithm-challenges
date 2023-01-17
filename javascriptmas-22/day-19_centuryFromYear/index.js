function centuryFromYear(num) {
  const nArr = Array.from(String(num));
  const n1 = Number(nArr.slice(0, 2).join(''));
  const n2 = Number(nArr.slice(2, 4).join(''));

  return n2 < 1 ? n1 : n1 + 1;
}

// * Test Suite
// */
// describe('centuryFromYear()', () => {
//     it('returns current century', () => {
//         // arrange
//         const year = 1905;

//         // act
//         const result = centuryFromYear(year);

//         // log
//         console.log("result 1: ", result);

//         // assert
//         expect(result).toBe(20);
//     });

//     it('returns current century for edge case of start of century', () => {
//         // arrange
//         const year = 1700;

//         // act
//         const result = centuryFromYear(year);

//         // log
//         console.log("result 2: ", result);

//         // assert
//         expect(result).toBe(17);
//     });
// });
