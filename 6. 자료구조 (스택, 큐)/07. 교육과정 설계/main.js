function solution(need, plan) {
  let answer = 'YES';
  let queue = need.split('');

  for (let x of plan) {
    if (queue.includes(x)) {
      // if (x === queue[0]) {
      //   queue.shift();
      // } else return 'NO';
      if (x !== queue.shift()) return 'NO';
    }
  }

  if (queue.length > 0) return 'NO';

  return answer;
}

let a = 'CBA';
let b = 'CABDGE';
console.log(solution(a, b));
