// DFS의 일반적인 코드
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

// 바둑이 문제 풀기
function solution(c, arr) {
  let answer = 0;
  let weights = []; // 구한 무게들
  let visited = []; // 탐색을 마친 노드들

  // arr를 정렬한다.
  arr.sort((a, b) => a - b);
  console.log(arr); // [ 33, 42, 58, 61, 81 ]

  // 가능한 무게 배열 dogs를 구해 DFS에 전달한다.
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {}
  }

  function DFS(dogs) {
    let sum = dogs.reduce((a, b) => a + b, 0);
    weights.push(sum);
  }

  // 요소를 1개씩 뽑는 것은 당연히 가장 무거운 무게가 될 수 없기 때문에 제외한다.

  return answer;
}

let array = [81, 58, 42, 33, 61];
console.log(solution(259, array));
