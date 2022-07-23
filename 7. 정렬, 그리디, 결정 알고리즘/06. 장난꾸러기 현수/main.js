// 내가 푼 코드
function solution(arr) {
  let answer = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== [...arr].sort((a, b) => a - b)[i])
      answer += String(i + 1) + ' ';
  }

  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));

// 답 코드
function solution(arr) {
  let answer = [];
  let sortArr = arr.slice(); // arr 배열을 복사하여 새 배열 생성
  sortArr.sort((a, b) => a - b); // 새 배열을 오름차순으로 정렬

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }

  return answer;
}

let arr1 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr1));
