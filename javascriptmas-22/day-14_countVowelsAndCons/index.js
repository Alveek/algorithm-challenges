function countVowelConsonant(str) {
  const vovels = 'aiueo';
  const strArr = str.split('');
  let res = 0;
  strArr.map((i) => vovels.includes(i) ? res += 1 : res += 2);
  return res;
}