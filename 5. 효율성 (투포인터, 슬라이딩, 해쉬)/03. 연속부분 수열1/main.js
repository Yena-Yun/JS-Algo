// 내 풀이 (while문 사용)
function solution(m, arr) {
  let answer = 0;
  let n = arr.length;
  let p1 = 0;
  let p2 = 0;
  let sum = 0;

  while (p1 < n && p2 < n) {
    sum += arr[p2++];

    if (sum > m) {
      p1++;
      p2 = p1;
      sum = 0;
    }
    if (sum === m) {
      answer++;
      p1++;
      p2 = p1;
      sum = 0;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

// -------------------------------------------
// for문으로 풀기
function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;

    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }

  return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, arr));
