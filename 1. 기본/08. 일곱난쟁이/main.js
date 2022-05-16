function solution(arr) {
  let answer = [];
  let sum = 0;
  let firstIndex;
  let secondIndex;

  for (let x of arr) {
    sum += x;
  }

  let extraSum = sum - 100;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === extraSum) {
        firstIndex = arr.indexOf(arr[i]);
        secondIndex = arr.indexOf(arr[j]);

        console.log(firstIndex);
        console.log(secondIndex);
      }
    }
  }

  for (let x of arr) {
    if (x === arr[firstIndex] || x === arr[secondIndex]) {
      continue;
    }
    answer.push(x);
  }

  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
