function solution(a, b, c) {
  let min = a;

  if (b < min) min = b;
  if (c < min) min = c;

  return min;
}

console.log(solution(2, 5, 1));
