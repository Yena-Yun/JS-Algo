function solution(s) {
  let answer = [];

  for (let x of s) {
    if (!answer.includes(x)) answer.push(x);
  }

  return answer.join('');
}

console.log(solution('ksekkset'));

// --------------------------------------------------------

function solution(s) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }

  return answer;
}

console.log(solution('ksekkset'));
