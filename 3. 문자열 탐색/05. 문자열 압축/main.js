// function solution(s) {
//   let answer = s[0];
//   let target = s[0];
//   let cnt = 0;

//   for (let x of s) {
//     if (target !== x) {
//       if (cnt === 1) cnt = '';
//       answer += cnt;
//       cnt = 1;

//       target = x;
//       answer += x;
//     } else cnt++;
//   }

//   return answer;
// }

// let str = 'KKHSSSSSSSE';
// console.log(solution(str));

function solution(s) {
  let answer = '';
  let cnt = 1;
  // s = s + ' ';

  // for (let i = 0; i < s.length - 1; i++) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      cnt++;
    } else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }

  return answer;
}

let string = 'KKHSSSSSSSE';
console.log(solution(string));
