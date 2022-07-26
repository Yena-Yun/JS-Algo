// 내가 짠 코드
function solution(meeting) {
  let answer = 1;
  let count = 0;
  let len = meeting.length;

  for (let i = 0; i < len; i++) {
    let target = meeting[i];

    for (let j = 0; j < len; j++) {
      if (i === j) continue;

      if (target[1] === meeting[j][0]) count++;
    }
    if (count > answer) answer = count;
  }

  return answer;
}

let arr1 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
let arr2 = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr1));
// console.log(solution(arr2));

// 답 코드 방식
function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let endTime = 0;

  for (let x of meeting) {
    if (x[0] >= endTime) {
      console.log('startTime: ' + x[0]);
      answer++;
      endTime = x[1];
      console.log('endTime: ' + endTime);
    }
  }

  return answer;
}

let arr3 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
let arr4 = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr3));
// console.log(solution(arr4));
