// 내가 푼 코드
function solution(target, arr) {
  let answer = 0;
  let lt = 0;
  let rt = arr.length - 1;

  arr.sort((a, b) => a - b);

  let mid = Math.floor(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    if (arr[mid] === target) answer = mid;
    else if (arr[mid] > target) {
      rt = mid;
      mid = Math.floor((rt - lt) / 2);
    } else if (arr[mid] < target) {
      lt = mid;
      mid = Math.floor((rt + lt + 1) / 2);
    }
  }

  return answer;
}

let arr1 = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr1));

// 답 코드
// 내가 푼 코드
function solution(target, arr) {
  let answer = 0;
  arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }

  return answer;
}

let arr2 = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(65, arr2));
