// function solution(m, product) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let sum = 0;
//   let maxPrice = Number.MIN_SAFE_INTEGER;
//   let cnt = 0;

//   for (let i = 0; i < product.length; i++) {
//     let price = arr[i][0];
//     if (price > maxPrice) {
//       if (maxPrice > 0) sum -= maxPrice * 0.5;
//       maxPrice = price;
//       price = price * 0.5;
//     }
//     sum += price + arr[i][1];
//     console.log(sum);
//     if (sum < m) {
//       cnt++;
//     } else {
//       answer = Math.max(answer, cnt);
//       cnt = 0;
//     }
//   }

//   return answer;
// }

// let arr = [
//   [6, 6],
//   [2, 2],
//   [4, 3],
//   [4, 5],
//   [10, 3],
// ];
// console.log(solution(28, arr));

function solution(budget, product) {
  let answer = 0; // 이 문제에서는 answer가 '최대값' 개념이지만 꼭 Number.MIN_SAFE_INTEGER로 초기화할 필요 없음
  let n = product.length;

  // 1. 들어온 배열을 오름차순(값이 제일 높은 순으로)으로 정렬
  // => 자연스럽게 최대값인 배열이 맨 위로 오게 됨 (배송비는 상수와 같은 개념이라 따로 고려하지 않는다)
  // 또, 배열의 요소가 또 여러 개를 담고 있는 배열이므로
  // 그냥 'a - b'가 아니라 각 배열의 요소 값들을 모두 더한 값을 뭉텅이로 'a'와 'b'로 잡음
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  // 2. product 배열을 돌면서 매 차례마다 남은 돈, 지출, 선물을 사줄 수 있는 학생 수 구하기
  for (let i = 0; i < n; i++) {
    // 남은 돈 (가격이 최대가 아닐 때도 우선 50%를 한 다음에 배송비를 더함?)
    let availableMoney = budget - (product[i][0] / 2 + product[i][1]);
    // cnt (선물을 사줄 수 있는 학생 수)
    let cnt = 1;

    // j 이중 for문으로 product 배열을 한 번 더 돈다.
    // (product 배열 길이까지 또 도니까 product의 요소 배열 1줄이 아닌 product 배열 전체를 다시 도는 것!)
    for (let j = 0; j < n; j++) {
      // 지출 = 가격 + 배송비
      let expense = product[j][0] + product[j][1];

      // j가 i와 달라야 함 = 한 번 잡은 배열은 또 잡지 않음
      // 지출이 남은 돈보다 크면 => 아무 것도 안 하고 j - for문 탈출
      if (j !== i && expense > availableMoney) break;

      // j가 i와 다르고, 지출이 남은 돈보다 적거나 같으면
      if (j !== i && expense <= availableMoney) {
        // 남은 돈 = '남은 돈 - 지출'로 교체
        availableMoney -= expense;
        // 선물을 받을 수 있는 학생 수를 1명 증가시킴
        cnt++;
      }
    }

    // (다음 i번째 row 배열로 넘어가기 전 또는 마지막에) answer를 cnt와 answer 중 더 큰 값으로 교체
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let array = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, array));
