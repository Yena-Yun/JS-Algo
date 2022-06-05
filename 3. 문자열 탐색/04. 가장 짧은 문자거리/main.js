function solution(s, t) {
  let answer = [];
  let p = 1000;

  // 1. 문자열 처음부터 끝까지 t와 같을 때를 제외하고는 계속 1을 더하며 answer에 추가한다.
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  console.log('1번째 로직 결과값: ' + answer); // [1001, 0, 1, 2, 3, 0, 1, 2, 3, 4, 0]

  // 2. p를 다시 임의의 값 1000으로 초기화해주고 이번에는 문자열을 뒤에서부터 돈다.
  // t와 같은 문자가 등장하는 순간 p는 0이 되고
  // 이후 t와 다른 문자가 등장하면 p에 1을 더한 뒤 기존의 answer 값과 비교하여 더 작은 값으로 answer의 값을 교체한다.
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
