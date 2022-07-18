// 내가 처음에 푼 코드
function solution(arr) {
  let answer = arr;
  let queue = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 0) {
      let target = arr.splice(i, 1)[0];
      queue.push(target);
    }
  }

  for (let x of queue) {
    arr.unshift(x);
  }

  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

// 답 코드 참고: 1번째 풀이
function solution(arr) {
  let answer = arr;
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

let arr1 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr1));

// 답 코드 참고: 2번째 풀이
function solution(arr) {
  let answer = [];

  for (let x of arr) {
    if (x < 0) answer.push(x);
  }

  for (let x of arr) {
    if (x > 0) answer.push(x);
  }

  return answer;
}

let arr2 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr2));
