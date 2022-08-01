// 1번째로 푼 코드
// function solution(times) {
//   let answer = 0;
//   let timeLine = [];
//   let minEndTime = 0;

//   times.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

//   timeLine.push(times[0]);
//   minEndTime = timeLine[0][1];

//   for (let i = 1; i < times.length; i++) {
//     console.log(times[i]);

//     if (timeLine[i - 1][1] > times[i][0]) {
//       timeLine.push(times[i]);
//     }

//     if (times[i][0] > minEndTime) {
//       timeLine.unshift();
//       minEndTime = times[i + 1][0];
//     }

//     console.log('timeLine: ' + timeLine);
//     // console.log('times: ' + times);
//     console.log(minEndTime);
//   }

//   // for (let x of times) {
//   //   if (x[1] > timeLine[0] > )
//   // }

//   if (timeLine.length > answer) answer = timeLine.length;

//   return answer;
// }

// let arr = [
//   [14, 18],
//   [12, 15],
//   [15, 20],
//   [20, 30],
//   [5, 14],
// ];
// console.log(solution(arr));

// 2번째로 푼 코드
// function solution(times) {
//   let answer = 0; // 동시에 존재하는 최대 인원
//   let timeLine = []; // 존재하고 있는 사람 ([시작시간, 끝시간]으로 나타냄)

//   times.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
//   timeLine.push(times[0]); // 0번째를 미리 넣어둔다.

//   for (let i = 1; i < times.length; i++) {
//     if (times[i][0] < timeLine[i - 1][1]) {
//       timeLine.push(times[i]);
//       answer++;
//     }
//     if (times[i][0] >= timeLine[i - 1][1]) {
//       timeLine.splice(0, 1);
//     }
//   }

//   answer = timeLine.length;
//   return answer;
// }

// let arr2 = [
//   [14, 18],
//   [12, 15],
//   [15, 20],
//   [20, 30],
//   [5, 14],
// ];
// console.log(solution(arr2));

// 답 코드
function solution(times) {
  let answer = 0; // 동시에 존재하는 최대 인원
  let timeLine = []; // 존재하고 있는 사람 ([시작시간, 끝시간]으로 나타냄)

  for (let x of times) {
    timeLine.push([x[0], 's']); // 꼭 배열 대괄호로 감싸줘야 하위 배열이 만들어진다.
    timeLine.push([x[1], 'e']);
  }

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;

  for (let x of timeLine) {
    if (x[1] === 's') cnt++;
    else cnt--;

    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr3 = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr3));
