function solution(s) {
  let answer = 'YES';
  // let reg = /[^A-Za-z]/gi; // 처음에 작성
  let reg = /[^a-z]/g;
  // let newStr = s.replace(reg, '').toLowerCase(); // 처음에 작성
  let newStr = s.toLowerCase().replace(reg, '');
  let len = newStr.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (newStr[i] !== newStr[len - i - 1]) return 'NO';
  }

  return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
