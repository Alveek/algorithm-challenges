// https://www.codewars.com/kata/5601c5f6ba804403c7000004
// 8 kyu

// barTriang([4, 6], [12, 4], [10, 10]) ------> [8.6667, 6.6667]
// barTriang([4, 2], [12, 2], [6, 10]) ------> [7.3333, 4.6667]

function barTriang(p1, p2, p3) {
  const x = Number((([p1[0], p2[0], p3[0]].reduce((a, b) => a + b, 0)) / 3).toFixed(4));
  const y = Number((([p1[1], p2[1], p3[1]].reduce((a, b) => a + b, 0)) / 3).toFixed(4));
  return [x, y];
}

barTriang([4, 6], [12, 4], [10, 10]);

// То, что toFixed() конвертирует в строку, а потом приходится конвертировать снова в число - это тупо. 