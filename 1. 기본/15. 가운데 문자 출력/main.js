function solution(s) {
  let answer;
  let targetIndex = Math.floor(s.length / 2);

  if (s.length % 2 === 1) {
    answer = s[targetIndex];
  } else if (s.length % 2 === 0) {
    answer = s[targetIndex - 1] + s[targetIndex];
  }

  return answer;
}
console.log(solution('study'));
