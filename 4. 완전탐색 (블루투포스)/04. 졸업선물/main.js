function solution(m, product) {
  let answer = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let maxPrice = Number.MIN_SAFE_INTEGER;
  let cnt = 0;

  for (let i = 0; i < product.length; i++) {
    let price = arr[i][0];
    if (price > maxPrice) {
      if (maxPrice > 0) sum -= maxPrice * 0.5;
      maxPrice = price;
      price = price * 0.5;
    }
    sum += price + arr[i][1];
    console.log(sum);
    if (sum < m) {
      cnt++;
    } else {
      answer = Math.max(answer, cnt);
      cnt = 0;
    }
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
