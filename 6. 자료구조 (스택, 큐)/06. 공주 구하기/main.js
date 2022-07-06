function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  // for (let i = 0; i < n; i++) {
  //   queue.push(i + 1);
  // } // Array.from으로 교체

  while (queue.length) {
    // queue의 인덱스가 특정 숫자 k번째가 아닌 경우 (1,2 / 4,5 / ..)
    // queue의 앞에서 뺀 것을 뒤에 다시 넣어준다. (queue를 계속 생성)
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    // k번째 queue 요소 => 앞에서 빼기만 한다.
    queue.shift();
    // queue에 요소가 1개만 남으면 해당 요소를 빼서 answer에 넣음
    if (queue.length === 1) answer = queue.shift();
  }

  return answer;
}

console.log(solution(8, 3));
