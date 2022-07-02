function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }

  return true;
}

function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();

  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  console.log(tH);

  // * 중요: t(부분 문자열) 길이에서 1을 뺌
  let len = t.length - 1;

  // 예: t의 길이가 3이라면 2번째까지만 돌아서
  // 일단 맨 뒤가 하나 모자르도록 해시 테이블을 만듦
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i] + 1));
    else sH.set(s[i], 1);
  }

  console.log(sH);

  let lt = 0;

  // rt는 't의 길이'부터 시작 (예: t의 길이가 3이라면 rt는 (0,1,)2번째 인덱스부터 시작)
  for (let rt = len; rt < s.length; rt++) {
    // s(전체 문자열)에서 rt번째 값을 '넣자마자' (= 슬라이딩 윈도우 범위 완성)
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    // 바로 부분문자열 해시 테이블과 비교하여 아나그램 여부 판별 (=> compareMaps)
    if (compareMaps(sH, tH)) answer++;

    // 아래는 (위의 판별 결과가 아나그램이든 아니든 다음 비교를 위해) 윈도우를 1칸 옆으로 옮기는 과정
    // 현재까지 0번째(lt)부터 t의 길이(rt=len)까지 윈도우를 뽑아서 부분 문자열과 비교했음
    // lt를 1칸 오른쪽으로 당기려면 2가지 방법이 있다.
    // 1) 해시 테이블에서 lt번째(0번째)의 value를 1 빼 준다
    // => value가 2 이상이었을 경우 맨 앞에 있던 해당 문자를 윈도우의 범위에서 제거하는 효과 (존재는 하되 윈도우 범위에는 포함 x)
    sH.set(s[lt], sH.get(s[lt]) - 1);

    // 2) 만약 1을 뺐는데 해당 문자의 value가 0이면 = 윈도우 범위 안에 그 문자가 더 이상 존재하지 않음을 뜻함
    // => delete로 해당 문자(key)를 삭제 처리
    // (= 맨 앞에 있던 문자를 윈도우 범위에서 제거)
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);

    // lt에 1을 더해서 lt의 위치를 1칸 오른쪽으로 이동
    lt++;
  }

  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
