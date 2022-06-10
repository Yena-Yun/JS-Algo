function solution(n, k, card) {
  let answer = 0;
  // let sum = [];
  let tmp = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        // if (i !== j && j !== k && i !== k)
        // sum.push(card[i] + card[j] + card[k]);
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  // let tmp = [...new Set(sum)];
  // tmp.sort((a, b) => b - a);
  // answer = tmp[k - 1];

  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
