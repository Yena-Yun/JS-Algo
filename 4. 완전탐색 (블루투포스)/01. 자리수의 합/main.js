// function solution(n, arr) {
//   let answer = 0;
//   let sum = 0;
//   let max = Number.MIN_SAFE_INTEGER;

//   for (let x of arr) {
//     let num = x.toString().split('');

//     for (let y of num) {
//       sum += Number(y);

//       if (sum > max) {
//         max = sum;
//         answer = x;
//       } else if (sum === max) answer = Math.max(x, answer);
//     }
//     sum = 0;
//   }

//   return answer;
// }

// let arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));

function solution(n, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = 0;
    let tmp = x;

    // 각 자릿수의 합 구하기
    // tmp가 1(true)일 동안 반복 (= tmp가 0(false)가 되면 탈출)
    while (tmp) {
      sum += tmp % 10; // 128 -> 8 / 12 -> 2 / 1 -> 1 (1은 10으로 나눠지지 않으므로 그대로 1 반환)
      tmp = Math.floor(tmp / 10); // 128 -> 12.xxx -> 12 / 12 -> 1.xxx -> 1 / 1 -> 0.xxx -> 0
    }

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
