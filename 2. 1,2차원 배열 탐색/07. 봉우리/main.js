function solution(arr) {
  let answer = 0;
  let nx;
  let ny;
  let mx;
  let my;
  let coord;
  let cnt = 0; // 봉우리인지 판별하기 위한 카운트 (4가 되면 해당 arr[i][j]값은 봉우리)

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // 각 배열값의 동서남북 좌표
      nx = i - 1 >= 0 ? arr[i - 1][j] : 0;
      ny = j + 1 < arr.length ? arr[i][j + 1] : 0;
      mx = i + 1 < arr.length ? arr[i + 1][j] : 0;
      my = j - 1 >= 0 ? arr[i][j - 1] : 0;
      coord = [nx, ny, mx, my];

      for (let k = 0; k < 4; k++) {
        if (coord[k] < arr[i][j]) {
          cnt++;
        }

        if (cnt === 4) {
          answer++; // 봉우리 1개 추가
          cnt = 0; // cnt 초기화
        }
      }
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
