// 처음에 내가 짠 코드
function solution(size, arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (!answer.includes(arr[i])) {
      answer.unshift(arr[i]);
      if (answer.length > size) answer.pop();
    } else {
      let index = answer.indexOf(arr[i]);
      let tmp = answer.splice(index, 1);
      answer.unshift(tmp[0]);
      if (answer.length > size) answer.pop();
    }
  }

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

function solution(size, arr) {
  let answer = [];

  arr.forEach((x) => {
    let pos = -1;
    // indexOf 쓰지 않고 포함 여부 찾기
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;

    // 포함하지 않으면 맨 앞에 추가
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
      // 포함하면 answer에서 해당 index번째 값 잘라내고 arr값(x)을 맨 앞에 추가
      else {
        answer.splice(pos, 1);
        answer.unshift(x);
      }
    }
  });

  return answer;
}

let arr1 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr1));

function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);

  arr.forEach((x) => {
    let pos = -1;
    // indexOf 쓰지 않고 포함 여부 찾기
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;

    // 포함하지 않으면 1번째부터 배열의 맨 끝까지 1칸씩 뒤로 밀기
    // 뒤로 미는 과정 = 다음 값을 이전 값으로 교체 (원래 맨 뒤에 있던 값은 저절로 배열에서 탈락)
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    // 포함하면 1번째부터 포함된 index번째까지 1칸씩 뒤로 밀기
    else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    // (포함을 하든 안 하든) 배열의 맨 앞에 x값 추가
    answer[0] = x;
  });

  return answer;
}

let arr2 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr2));
