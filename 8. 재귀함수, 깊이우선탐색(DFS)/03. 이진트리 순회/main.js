// 전위 순회
// function solution(n) {
//   let answer = '';

//   function DFS(v) {
//     if (v > 7) return;
//     else {
//       answer += v + ' ';
//       DFS(v * 2);
//       DFS(v * 2 + 1);
//     }
//   }

//   DFS(n);

//   return answer;
// }

// console.log(solution(1));

// 후위 순회
function solution(n) {
  let answer = '';

  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      answer += v + ' ';
    }
  }

  DFS(n);

  return answer;
}

console.log(solution(1));
