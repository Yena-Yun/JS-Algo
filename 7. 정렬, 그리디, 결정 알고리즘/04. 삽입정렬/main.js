// // 내가 푼 코드
// function solution(arr) {
//   let answer = arr;

//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//     }
//   }

//   return answer;
// }

// let arr = [11, 7, 5, 6, 10, 9];
// console.log(solution(arr));

// 답 코드 1
function solution(arr) {
  let answer = arr;

  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j;

    for (j = i - 1; j >= 0; j--) {
      console.log('arr[j]: ' + arr[j]);
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
        console.log('j문 arr: ' + arr);
      } else break;
    }
    // j-for문을 나온 이 시점에서 j는 기존값 - 1이 되어 있다
    // (증감식을 만나 --가 이루어진 다음에 조건문을 만족 못할 시 for문을 탈출하기 때문)
    // => j 다음 자리에 tmp 값을 넣어주고 싶다면 j + 1을 해야 올바른 자리에 들어간다
    console.log('j: ' + j);
    console.log('tmp: ' + tmp);
    arr[j + 1] = tmp;
    console.log('j문 이후 arr: ' + arr);
  }

  return answer;
}

let arr1 = [11, 7, 5, 6, 10, 9];
console.log(solution(arr1)); // [ 5, 6, 7, 9, 10, 11 ]

// 답 코드 2
function solution(arr) {
  let answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    // j를 answer의 길이까지만 돌리면 자연스럽게 i의 이전 값들(= answer에 추가된 만큼)만 돌게 된다
    for (let j = 0; j < answer.length; j++) {
      // arr의 i번째 값이 answer의 j번째 값보다 작다면
      if (arr[i] < answer[j]) {
        // answer의 j번째에서 아무 것도 삭제하지 않고(deleteCount: 0) arr의 i번째 값을 추가
        // i번째 값이 들어오면서 j번째 값이 뒤로 한칸 밀리게 됨 => i번째 값이 j번째의 바로 앞에 위치
        answer.splice(j, 0, arr[i]);
        break;
      }
    }
  }

  return answer;
}

let arr2 = [11, 7, 5, 6, 10, 9];
console.log(solution(arr2)); // [ 5, 6, 7, 9, 10, 11 ]
