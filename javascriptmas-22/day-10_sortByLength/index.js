const strs = ['abc', '', 'aaa', 'a', 'zz'];

function sortByLength(strs) {
  return strs.sort((a, b) => a.length - b.length);
}

// act
const result = sortByLength(strs);

// log
console.log('result: ', result);
