// // 내가 푼 코드
// function solution(arr) {
//   let answer = 'NO';

//   let seoroso = [];
//   let counterPart = [];

//   const isPrime = (n) => {
//     for (let i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
//       if (n % i === 0) return false;
//     }

//     return true;
//   };

//   for (let x of arr) {
//     if (isPrime(x)) seoroso.push(x);
//     else counterPart.push(x);
//   }

//   if (
//     seoroso.reduce((a, b) => a + b, 0) ===
//     counterPart.reduce((a, b) => a + b, 0)
//   )
//     answer = 'YES';

//   return answer;
// }

// let arr = [1, 3, 5, 6, 7, 10];
// console.log(solution(arr));

// 답 코드
function solution(arr) {
  let answer = 'NO';
  let flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;

  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
