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

// 답 코드 (1번째 방법)
function solution(size, arr) {
  // 캐시 메모리를 size 크기의 배열로 초기화
  let answer = Array.from({ length: size }, () => 0);

  arr.forEach((x) => {
    let pos = -1;
    // 해야할 일이 기존 캐시 메모리에 포함되는지 확인
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

// 답 코드 (2번째 방법)
function solution(size, arr) {
  let answer = []; // 반환할 캐시 메모리

  // 해야 할 작업(arr)을 하나씩 뽑아 다음을 실행
  arr.forEach((x) => {
    // pos = 기존 배열에 포함되었을 경우 포함된 값의 위치 (값이 없을 수도 있으므로 -1로 초기화)
    let pos = -1;

    // 해야 할 작업이 기존 캐시 메모리에 있는지 확인
    // (캐시 메모리 배열의 길이가 size로 정해져 있으므로 size까지만 돌면서 확인한다)
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;

    // Cache Miss: 해야할 작업이 캐시에 없는 경우 (pos === -1)
    if (pos === -1) {
      // 1) 그대로 캐시 메모리의 맨 앞에 추가
      answer.unshift(x);

      // 2) 캐시 메모리가 size를 넘어가면 맨 뒤에서 값 하나 삭제
      if (answer.length > size) answer.pop();

      // Cache Hit: 해야할 작업이 캐시에 있는 경우 (pos !== -1)
    } else {
      // 1) 캐시 메모리에서 포함된 작업을 잘라내고 (Array.splice(index, 삭제할 개수))
      // 2) 해야 할 작업 요소(x)를 캐시 메모리의 맨 앞에 추가
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });

  return answer;
}

let arr1 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr1));
