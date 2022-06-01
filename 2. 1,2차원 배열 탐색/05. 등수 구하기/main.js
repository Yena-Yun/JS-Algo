function solution(arr) {
  let answer = Array.from({ length: n }, () => 1);
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }

  return answer;
}

let arr = [74, 89, 92, 92, 100, 92];
console.log(solution(arr));
