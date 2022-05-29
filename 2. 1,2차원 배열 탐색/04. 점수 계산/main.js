function solution(arr) {
  let answer = 0; // 최종 점수 총합(sum)
  let accumulate = 0; // 가산점이 반영된 점수

  for (let x of arr) {
    if (x === 0) accumulate = 0;
    else {
      accumulate += 1;
      answer += accumulate;
    }
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
