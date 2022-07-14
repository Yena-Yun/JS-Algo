// 내가 푼 코드
function solution(arr) {
  let answer = arr;

  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }

  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

// 답 코드 1
function solution(arr) {
  let answer = arr;
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
      } else break;
    }
    // j-for문을 나온 이 시점에서 j는 -1이 되어 있다
    // (증감식을 만나 --가 이루어진 다음에서야 조건문을 만족 못할 시 for문을 탈출하기 때문)
    // => j 다음 자리에 tmp 값을 넣어주고 싶다면 j + 1을 해야 올바르게 들어간다
    arr[j + 1] = tmp;
  }

  return answer;
}

let arr1 = [11, 7, 5, 6, 10, 9];
console.log(solution(arr1));

// 답 코드 2
function solution(arr) {
  let answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    // j를 answer의 길이까지만 돌리면 자연스럽게 i의 이전 값들만 돌게 됨
    for (let j = 0; j < answer.length; j++) {
      if (arr[i] < answer[j]) {
        // j번째에서 아무 것도 삭제하지 않고(deleteCount: 0) i번째 값 추가 (= 두 값 교환)
        answer.splice(j, 0, arr[i]);
      }
    }
  }

  return answer;
}

let arr2 = [11, 7, 5, 6, 10, 9];
console.log(solution(arr2));
