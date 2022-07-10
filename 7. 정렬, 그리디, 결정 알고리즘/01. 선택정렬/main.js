// 처음에 푼 코드
function solution(arr) {
  let answer = arr;
  let len = answer.length;

  for (let i = 0; i < len; i++) {
    let target = answer[i];
    let previous;

    for (let j = i + 1; j < len; j++) {
      if (answer[j] < target) {
        target = answer[j];
        previous = j;
      }
    }

    if (target === answer[i]) continue;

    let tmp = answer[i];
    answer[i] = target;
    answer[previous] = tmp;
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

// 두 번째로 푼 코드
function solution(arr) {
  let answer = arr;
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let idx = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[idx]) idx = j; // '위치'가 중요하므로 값은 굳이 저장할 필요가 없다
    }

    // 자바스크립트의 [[], []] 문법을 이용하여 두 값을 한 번에 교환 가능
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return answer;
}

let array = [13, 5, 11, 7, 23, 15];
console.log(solution(array));
