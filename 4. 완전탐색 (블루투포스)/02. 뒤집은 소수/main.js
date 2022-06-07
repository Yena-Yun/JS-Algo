// function isPrime(num) {
//   if (num === 1) return false;
//   else if (num === 2 || num === 3 || num === 5) return true;

//   if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) return false;
//   return true;
// }

// function solution(arr) {
//   let answer = [];

//   for (let x of arr) {
//     let tmp = x.toString().split('').reverse().join('');
//     if (isPrime(Number(tmp))) answer.push(Number(tmp));
//   }

//   return answer;
// }

// let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr));

function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(arr) {
  let answer = [];

  for (let x of arr) {
    let tmp = Number(x.toString().split('').reverse().join(''));
    if (isPrime(tmp)) answer.push(tmp);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
