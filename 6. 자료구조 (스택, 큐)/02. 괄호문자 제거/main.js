function solution(s) {
  let answer = '';
  let stack = [];

  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else stack.push(x);
  }

  console.log(stack); // ['E', 'F', 'L', 'M']

  // for (let x of stack) answer += x;
  answer = stack.join('');

  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
