function solution(s) {
  let answer = [];

  for (let x of s) {
    if (x === x.toUpperCase()) answer.push(x.toLowerCase());
    else answer.push(x.toUpperCase());
  }

  return answer.join('');
}

console.log(solution('StuDY'));
