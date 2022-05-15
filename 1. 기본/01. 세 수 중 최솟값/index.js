function solution(a, b, c) {
  let min = a;

  if (b < a) min = b;
  if (c < min) min = c;

  return min;
}

console.log(solution(3, 5, 2));
