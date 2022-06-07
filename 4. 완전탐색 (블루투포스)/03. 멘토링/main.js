function solution(test) {
  let m = test.length; // 총 테스트 횟수
  let n = test[0].length; // 총 학생 수
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;

      for (let k = 0; k < m; k++) {}
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
