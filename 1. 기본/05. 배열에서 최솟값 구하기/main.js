function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;

  if (arr.length !== 7) {
    return;
  } else {
    arr.forEach((item) => {
      if (item < min) min = item;
    });
  }

  return min;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
