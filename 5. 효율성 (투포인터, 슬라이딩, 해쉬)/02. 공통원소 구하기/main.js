function solution(arr1, arr2) {
  let answer = [];

  for (let x of arr1) {
    for (let y of arr2) {
      if (x === y) answer.push(x);
    }
  }
  return answer.sort((a, b) => a - b);
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
