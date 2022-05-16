function solution(arr) {
  let answer = [];
  let oddArr = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let x of arr) {
    if (x % 2 === 1) {
      oddArr.push(x);
    }
  }

  sum = oddArr.reduce((acc, cur) => acc + cur, 0);

  for (let x of oddArr) {
    if (x < min) min = x;
  }

  answer.push(sum, min);

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
