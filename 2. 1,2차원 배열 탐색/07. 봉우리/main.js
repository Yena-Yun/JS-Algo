function solution(arr) {
  let answer = 0;
  // 각 배열값의 동서남북 좌표
  let nx;
  let ny;
  let mx;
  let my;
  let coord = [];
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      nx = arr[i][j + 1];
      // ny = arr[i - 1][j];
      mx = arr[i][j - 1];
      // my = arr[i + 1][j];

      console.log(nx, ny, mx, my);

      // if (nx === null) nx = 0;
      // else if (ny === null) ny = 0;
      // else if (mx === null) mx = 0;
      // else if (my === null) my = 0;

      // coord.push(nx, ny, mx, my);

      // for (let k = 0; k < 4; k++) {
      //   if (coord[k] < arr[i][j]) cnt++;
      // }

      // if (cnt === 4) {
      //   answer++;
      //   cnt = 0;
      // }
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
