// 처음에 푼 코드
function solution(str1, str2) {
  let answer = 'YES';
  let sH = new Map();
  let pH = new Map();

  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (let x of str2) {
    if (pH.has(x)) pH.set(x, pH.get(x) + 1);
    else pH.set(x, 1);
  }

  for (let [key1, val1] of sH) {
    for (let [key2, val2] of pH) {
      if (key1 === key2) {
        if (val1 === val2) answer = 'YES';
      }
    }
  }

  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));

// sH 하나만 써서 다시 푼 코드
function solution(str1, str2) {
  let answer = 'YES';
  let sH = new Map();

  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  console.log(sH);

  for (let x of str2) {
    // 아나그램이 아닌 경우 2가지
    // 1) 2번째 문자열에 해당 문자가 아예 없는 경우
    // 2) (문자를 만날 때마다 갯수를 빼주다가) 해시 테이블에서의 갯수가 0이 된 경우
    if (!sH.get(x) || sH.get(x) === 0) return 'NO'; // 바로 'NO' 반환 (answer에 넣어주는 연산 생략)

    // (str2에서 문자를 찾은 경우(let x))
    // 해시 테이블의 해당 문자의 갯수를 1 빼 준다.
    sH.set(x, sH.get(x) - 1);
  }

  return answer;
}

let c = 'AbaAeCe';
let d = 'baeeACA';
console.log(solution(c, d));
