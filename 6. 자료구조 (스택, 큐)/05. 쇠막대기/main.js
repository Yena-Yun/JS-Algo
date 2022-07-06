// 내가 짠 코드
function solution(s) {
  let answer = 0; // 최종 잘려진 막대기 수
  let stack = []; // 쌓아올리는 막대기 (갯수는 stack의 길이로 구함)

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')' && s[i - 1] === '(') {
      stack.pop();
      answer += stack.length;
    } else if (s[i] === ')' && s[i - 1] !== '(') {
      stack.pop();
      answer += 1;
    } else stack.push(s[i]);
  }

  return answer;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));

// 답 코드가 더 간결해서 추가
function solution(s) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(s[i]);
    else {
      stack.pop(); // stack에서 막대기 제거
      if (s[i - 1] === '(')
        answer += stack.length; // 레이저 쏘아짐 (잘려진 갯수 추가)
      else answer += 1; // 막대기 끝남
    }
  }

  return answer;
}

let b = '(((()(()()))(())()))(()())';
console.log(solution(b));
