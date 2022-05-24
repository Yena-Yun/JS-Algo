function solution(s) {
  let answer;
  let maxLength = Number.MIN_SAFE_INTEGER;

  for (let x of s) {
    if (x.length > maxLength) {
      maxLength = x.length;
      answer = x;
    }
  }

  return answer;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
