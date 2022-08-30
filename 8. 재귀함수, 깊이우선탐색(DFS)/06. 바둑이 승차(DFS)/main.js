function solution(c, arr) {
  let answer = 0;

  // startnode를 구한다.
  let startNode = arr[0];

  let visitedQueue = []; // 탐색을 마친 노드들
  let willVisitStack = []; // 탐색해야 할 노드들

  willVisitStack.push(startNode); // 노드 탐색 시작

  // 탐색해야 할 노드가 남아 있다면
  while (willVisitStack.length !== 0) {
    // 검사할 노드를 꺼내서
    const node = willVisitStack.pop();
    console.log('node: ' + node);

    // 탐색을 마친 노드에 노드가 있는지 검사
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node); // 없으면 추가
      console.log('visitedQueue: ' + visitedQueue);
      // console.log('arr[node]: ' + arr[node]);
      willVisitStack = [...willVisitStack, node];
    }

    console.log('willVisitStack: ' + willVisitStack);
  }

  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
