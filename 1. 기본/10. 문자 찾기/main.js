function solution(s, t) {
  let answer = [];

  if (s.length < 100) {
    for (let x of s) {
      if (x === t) answer.push(x);
    }
    return answer.length;
  }

  return;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
