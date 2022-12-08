// Суть в том, чтобы проверить, валидное ли время

function validTime(str) {
  const arr = str.split(":").map(n => +n);
  const hours = arr[0];
  const minutes = arr[1];
  if (hours >= 0 && minutes >= 0) {
    return hours <= 24 && minutes <= 59;
  } else {
    return 'Invalid data';
  }
}

const testStr = '13:58'

validTime(testStr);

/**
* Test Suite 

describe('validTime()', () => {
  it('returns true for valid time', () => {
    // arrange
    const str = '13:58';

    // act
    const result = validTime(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(true);
  });

  it('returns false when invalid hours', () => {
    // arrange
    const str = '25:51';

    // act
    const result = validTime(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(false);
  });

  it('returns false when invalid minutes', () => {
    // arrange
    const str = '02:76';

    // act
    const result = validTime(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(false);
  });
});

*/