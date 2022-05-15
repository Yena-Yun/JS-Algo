function solution(a, b, c) {
  let answer;
  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;

  if (max > a + b + c - max) answer = 'YES';
  else answer = 'NO';

  return answer;
}

console.log(solution(13, 33, 17));
