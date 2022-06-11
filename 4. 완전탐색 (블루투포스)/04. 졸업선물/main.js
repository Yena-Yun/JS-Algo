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

  // 1. 들어온 배열을 오름차순으로(서로 더한 값이 작은 것부터) 정렬
  // ++ 배열의 각 요소가 여러 요소를 담고 있으므로 그냥 'a - b'가 아니라 각 배열의 요소 값들을 모두 더한 값을 뭉텅이로 'a'와 'b'로 잡음
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  console.log(product);

  // 2. product 배열을 돌면서 매 차례마다 남은 돈, 지출, 선물을 사줄 수 있는 학생 수 구하기
  for (let i = 0; i < n; i++) {
    // 남은 돈 (매 차례 때마다 예산에서 i번째의 가격의 절반 + 배송비를 뺀 금액이 사용가능한 돈)
    let availableMoney = budget - (product[i][0] / 2 + product[i][1]);
    // cnt (선물을 사줄 수 있는 학생 수)
    let cnt = 1;

    // j-for문으로 product 배열 전체를 한 번 더 돈다. (= product 배열 길이까지 또 돌기)
    for (let j = 0; j < n; j++) {
      // 지출 = '가격 + 배송비'
      let expense = product[j][0] + product[j][1];

      // j가 i와 다를 때(= 한 번 잡은 [가격, 배송비] 요소는 또 잡지 않음)
      // 지출이 남은 돈보다 크면 => (더 이상 돈을 쓸 수 없으므로) 아무 것도 안 하고 j-for문 탈출
      if (j !== i && expense > availableMoney) break;

      // j가 i와 다를 때 + 지출이 남은 돈보다 더 적거나 또는 같으면(= 선물을 더 살 수 있음)
      if (j !== i && expense <= availableMoney) {
        // 남은 돈 = '남은 돈 - 지출'
        availableMoney -= expense;
        // 선물을 받을 수 있는 학생 수를 1명 증가시킴
        cnt++;
      }
    }

    // (다음 i번째 배열로 넘어가기 전 또는 모든 연산이 끝난 맨 마지막에) answer를 cnt와 answer 중 더 큰 값으로 교체
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
