// 처음에 푼 것 (답 도출 x)
function solution(board, moves) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < moves.length; i++) {
    // console.log(moves[i]);

    for (let j = 0; j < board.length; j++) {
      for (let k = 0; k < board.length; k++) {
        let pos = board[k][j];
        // console.log(pos);
        if (k + 1 === moves[i]) {
          if (pos !== 0) {
            if (stack[stack.length - 1] === pos) {
              stack.pop();
              answer += 2;
            }
            stack.push(pos);
          }
        }
        console.log(stack);
      }
    }
  }

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));

// 2번째로 푼 것
function solution(board, moves) {
  let answer = 0;
  let stack = [];

  // * forEach는 새로운 배열을 반환하지 않는다 (단순 for문 대체용)
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1]; // 뽑은 인형
        // stack의 맨 위의 인형과 뽑은 인형이 일치할 경우
        if (stack[stack.length - 1] === tmp) {
          stack.pop();
          answer += 2;
          // stack의 맨 위의 인형과 뽑은 인형이 다를 경우 => 계속 stack에 쌓아 나간다.
        } else {
          stack.push(tmp);
        }
      }
    }
  });

  return answer;
}

let c = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let d = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(c, d));
