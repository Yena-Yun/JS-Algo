// 내가 푼 코드
function solution(n) {
  let answer = [];

  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);

      let arr = [];

      function Sub(L) {
        if (L === 0) return;
        else {
          Sub(L - 1);
          arr.push(L);
        }
      }

      Sub(L);
      answer.push(arr);
    }
  }

  DFS(n);

  return answer;
}

console.log(solution(3)); // [ [ 1 ], [ 1, 2 ], [ 1, 2, 3 ] ]

// 답 코드
function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);

  // console.log('ch: ' + ch); // [0, 0, 0, 0]

  function DFS(L) {
    if (L === n + 1) {
      let tmp = '';

      console.log('ch: ' + ch);

      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + ' ';
      }

      console.log('tmp: ' + tmp);

      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[L] = 1;
      DFS(L + 1);
      ch[L] = 0;
      DFS(L + 1);
    }
  }

  DFS(1);

  return answer;
}

console.log(solution(3)); // [ '1 2 3', '1 2', '1 3', '1', '2 3', '2', '3' ]
