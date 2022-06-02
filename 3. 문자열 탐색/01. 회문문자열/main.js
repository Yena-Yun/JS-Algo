// function solution(s) {
//   if (s.split('').reverse().join('').toLowerCase() === s.toLowerCase())
//     return 'YES';
//   else return 'NO';
// }

// let str = 'goooG';
// console.log(solution(str));

// -------------------------------------------------------

// function solution(s) {
//   let answer = 'NO';
//   let newStr = [];

//   for (let x of s) {
//     newStr.push(x.toLowerCase());
//   }

//   if (s.toLowerCase() === newStr.reverse().join('')) answer = 'YES';

//   return answer;
// }

// let string = 'goooG';
// console.log(solution(string));

// -------------------------------------------------------

function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  let len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) return 'NO';
  }

  return answer;
}

let string = 'goooG';
console.log(solution(string));
