// 일반적인 풀이
function solution(arr1, arr2) {
  let answer = arr1.concat(arr2).sort((a, b) => a - b);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));

// -------------------------------------------------------------------------------
// 투포인터 알고리즘으로 풀기
function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = 0;
  let p2 = 0;

  while (p1 < n && p2 < m) {
    // * p1이나 p2를 증가시킨다 = 포인터의 위치를 다음 인덱스로 이동시킨다

    // 1번째: p1은 계속 증가하고, p2는 (0으로) 그대로 있음
    // (p1++의 의미: answer에 arr1[p1] 값을 추가한 뒤 p1에 ++ 연산(1칸 다음으로 이동))
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    // 만약 p2번째 값이 더 크면 p1은 그대로 두고 p2번째 값을 넣고 p2를 1 증가
    else answer.push(arr2[p2++]);

    console.log(answer); // [1, 2, 3, 3, 5]
  }

  // 위의 while문은 p1이 arr1의 길이인 n을 초과하면 끝남 => answer를 출력하면 arr1의 마지막 값인 5까지 들어가 있다 ([1, 2, 3, 3, 5])
  // arr2에 남은 나머지 값도 answer에 추가해주기 위해 while문을 더 돌림 (만약 arr1이 남았을 경우도 대비하여 while문을 2개 만듦)

  while (p1 < n) answer.push(arr1[p1++]); // 이 문제에서는 arr1, arr2 배열이 미리 오름차순 정렬되어 있어서 다른 추가 작업 없이 바로 answer에 차례로 추가
  while (p2 < m) answer.push(arr2[p2++]);

  return answer;
}

let c = [1, 3, 5];
let d = [2, 3, 6, 7, 9];
console.log(solution(c, d));
