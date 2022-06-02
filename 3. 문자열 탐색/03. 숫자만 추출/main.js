// function solution(str) {
//   let answer;
//   let reg = /[^0-9]/g;

//   let result = str.replace(reg, '');
//   answer = Number(result);

//   return answer;
// }

// let str = 'g0en2T0s8eSoft';
// console.log(solution(str));

function solution(str) {
  let answer = '';

  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }

  return parseInt(answer);
}

let string = 'g0en2T0s8eSoft';
console.log(solution(string));
