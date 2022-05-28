function solution(arr) {
  let answer = [];
  let max = arr[0];

  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer.push(arr[i]);
      max = arr[i];
    }
  }

  return answer.length;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
