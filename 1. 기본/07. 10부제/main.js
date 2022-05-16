function solution(day, arr) {
  let answer = [];

  for (let x of arr) {
    if (x % 10 === day) answer.push(x);
  }

  return answer.length;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

function solution(day, arr) {
  let answer = [];

  for (let x of arr) {
    if (Number(x.toString()[1]) === day) answer.push(x);
  }

  return answer.length;
}

array = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, array));
