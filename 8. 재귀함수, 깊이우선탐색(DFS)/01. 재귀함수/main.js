function solution(n) {
  // 깊이 우선 탐색은 트리 모양의 자료 구조를 탐색한다.
  // 트리의 각 단계를 Level(L)이라고 한다.
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
