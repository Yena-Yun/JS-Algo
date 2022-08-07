function count(stable, dist) {
  let cnt = 1;
  let endPoint = stable[0];

  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - endPoint >= dist) {
      cnt++;
      endPoint = stable[i];
    }
  }

  return cnt;
}

function solution(c, stable) {
  let answer = 0;
  stable.sort((a, b) => a - b);

  // stable은 마구간의 '좌표' = 떨어져 있는 '거리'
  // 문제에서 '마구간 간에 좌표가 중복되는 일은 없다'고 했으므로 최소한으로 떨어질 수 있는 거리는 1
  let lt = 1;

  // stable의 각 요소는 첫 번째 마구간에서 떨어져 있는 상대적인 거리(좌표) => 바로 거리 개념으로 사용 가능
  let rt = stable[stable.length - 1];

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
