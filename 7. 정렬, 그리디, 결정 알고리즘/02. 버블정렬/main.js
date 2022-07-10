// 처음 푼 코드
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    if (arr === arr.sort((a, b) => a - b)) break;
    if (arr[i] > arr[i + 1]) arr[i] = arr[i + 1];
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

// 두 번째로 푼 코드
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return answer;
}

let array = [13, 5, 11, 7, 23, 15];
console.log(solution(array));
