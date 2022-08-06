function count(songs, capacity) {
  let cnt = 1;
  let sum = 0;

  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }

  return cnt;
}

function solution(m, songs) {
  let answer = 0;
  let lt = Math.max(...songs); // songs 중 최대값 =  9
  let rt = songs.reduce((acc, cur) => acc + cur, 0); // songs 전체 합 = 45

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(solution(3, arr));
