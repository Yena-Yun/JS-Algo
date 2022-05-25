function solution(s) {
  let answer = [];

  for (let x of s) {
    if (!answer.includes(x)) answer.push(x);
  }

  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));

// --------------------------------------------------------

function solution(s) {
  let answer = s.filter((v, i) => s.indexOf(v) === i);

  return answer;
}
let string = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(string));
