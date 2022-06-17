// 1회차 풀이
function solution(k, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    console.log(sum);

    if (rt === k - 1) {
      if (sum > max) max = sum;
      rt = lt;
      lt++;
      k++;
      sum = 0;
    }
  }

  answer = max;

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

// ---------------------------------------------------

// 2회차 풀이
function solution(k, arr) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) sum += arr[i];

  answer = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

let b = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, b));
