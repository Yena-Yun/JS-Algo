// 내가 푼 코드
function solution(s) {
  let stack = [];
  let lt;
  let rt;

  for (let x of s) {
    if (isNaN(Number(x))) {
      rt = stack.pop();
      lt = stack.pop();
    } else stack.push(Number(x));

    if (x === '+') stack.push(lt + rt);
    else if (x === '-') stack.push(lt - rt);
    else if (x === '*') stack.push(lt * rt);
    else if (x === '/') stack.push(lt / rt);
  }

  return stack[0];
}

let str = '352+*9-';
console.log(solution(str));

// 답 코드: 내가 푼 코드와 살짝 달라서 추가
function solution(s) {
  let answer;
  let stack = [];

  for (let x of s) {
    // 뽑은 값이 숫자인 경우
    if (!isNaN(x)) stack.push(Number(x));
    // 뽑은 값이 연산자인 경우
    else {
      // 뽑은 값이 연산자인 경우에만 연산을 하기 위해 피연산자 rt, lt 필요
      // 여기서 rt, lt를 선언하지 않고 전역에 선언하면
      // 뽑은 값이 숫자인 경우(연산을 하지 않고 stack에 추가만 하는 경우)에도 rt, lt가 매번 선언됨
      let rt = stack.pop();
      let lt = stack.pop();

      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }

  answer = stack[0];
  return answer;
}

let string = '352+*9-';
console.log(solution(string));
