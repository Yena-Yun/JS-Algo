// // 일반 풀이
// function solution(arr1, arr2) {
//   let answer = [];

//   for (let x of arr1) {
//     for (let y of arr2) {
//       if (x === y) answer.push(x);
//     }
//   }
//   return answer.sort((a, b) => a - b);
// }

// let a = [1, 3, 9, 5, 2];
// let b = [3, 2, 5, 7, 8];
// console.log(solution(a, b));

// -------------------------------------------------------------------------------
// 투포인터 알고리즘으로 풀기

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = 0;
  let p2 = 0;

  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);

  while (p1 < n && p2 < m) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    }
    // else if (p1 !== n - 1) p1++; // 내가 짠 코드
    else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }

  return answer;
}

let c = [1, 3, 9, 5, 2]; // [ 1, 2, 3, 5, 9 ]
let d = [3, 2, 5, 7, 8]; // [ 2, 3, 5, 7, 8 ]
console.log(solution(c, d));
