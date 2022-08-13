// 내가 짠 코드
function solution(n) {
  function DFS(L) {
    for (let i = 0; i < L; i++) console.log(i + 1);
  }

  DFS(n);
}

solution(3);

// 답 코드 방향
function solution(n) {
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }

  DFS(n);
}

solution(3);
