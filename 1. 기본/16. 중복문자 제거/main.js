function solution(s) {
  let answer = [];

  for (let x of s) {
    if (!answer.includes(x)) answer.push(x);
  }

  return answer.join('');
}

console.log(solution('ksekkset'));
