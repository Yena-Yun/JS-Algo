// 직접 주소 테이블 방식
function solution(s) {
  let answer = '';
  let max = Number.MIN_SAFE_INTEGER;
  let candidates = [];
  let table = {};

  for (let x of s) {
    if (!candidates.includes(x)) {
      candidates.push(x);
      table[x] = 1; // key로 들어가는 순간 한 번은 호명된 것이므로 1로 초기화
    }

    table[x] += 1;

    if (table[x] > max) {
      max = table[x];
      answer = x;
    }
  }

  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));

// 자료구조 Map을 이용한 방식
function solution(s) {
  let answer;
  // Map의 요소는 [key, val] 형식
  // 메서드: set(key, value), get(key), has(key)
  let sH = new Map();

  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  let max = Number.MIN_SAFE_INTEGER;

  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

let string = 'BACBACCACCBDEDE';
console.log(solution(string));
