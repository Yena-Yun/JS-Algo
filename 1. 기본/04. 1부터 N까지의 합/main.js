function solution(n) {
  let sum = 0;

  if (n > 20) {
    return;
  } else {
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  }

  return sum;
}

console.log(solution(10));
