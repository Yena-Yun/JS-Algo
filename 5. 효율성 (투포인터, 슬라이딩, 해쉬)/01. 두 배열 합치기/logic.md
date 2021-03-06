# 문제

<pre>
두 배열을 오름차순으로 합쳐서 출력
</pre>

# BEFORE

<pre>
문제는 로직을 짜기 전에 concat과 sort를 이용하면 되겠다 생각해서 바로 풀었지만, 
이 챕터에서 해당 문제에 대해 요구하고 있는 것은 투포인터 알고리즘을 활용한 풀이란 생각이 들었다. 
그래서 개념을 공부한 대로 풀어보려 했지만 아직 문제풀이 쪽으로는 익숙치 않은 게 느껴져서
투포인터 알고리즘으로 푸는 방식은 답 코드를 참고했다.
</pre>

# AFTER

<pre>
[ 답 코드 분석 ]
1. 두 배열을 concat으로 바로 합치지 않고, 먼저 각 배열의 length(n, m)를 각각 잡는다.
2. 포인터로 사용할 p1, p2를 선언한다.
3. whle문을 총 3개 돌린다.
4. [1번째 while문] p1이 n보다 작을 때까지 + p2가 m보다 작을 때까지 돌면서 다음을 실행한다.
  * arr1의 p1번째 값이 arr2의 p2번째 값보다 작거나 같다면 answer 배열에 arr1의 p1에서 1씩 증가시킨 차례의 값을 추가한다.
  * 위의 조건이 아니면 arr2의 p2에서 인덱스를 1씩 올린 차례의 값을 answer 배열에 추가한다.
5. [2번째 while문] p1이 n보다 작을 때까지 돌면서 answer 배열에 arr1의 p1에서 1씩 증가시킨 차례의 값을 추가한다.
6. [3번째 while문] answer 배열에 arr2의 p2에서 인덱스를 1씩 올린 차례의 값을 추가한다.
7. answer를 반환한다.

문제 분석만으로는 포인터 2개를 선언한 것까지만 이해가 되어서
코드를 직접 치며 console.log를 찍어가면서 이해해보기로 했다.

-------------------------------------------------------------------

console.log를 찍으며 코드를 보니 바로 바로 이해가 잘 되었다.
++ 단항 연산자를 뒤에 붙여서, 앞의 연산을 진행한 후에 자동으로 for의 i++과 같은 증감식을 실행시키는 부분이 간결하게 느껴져서 좋았다.
앞으로 for문 외에 while문을 쓰는 연습을 하면서 이 단항 연산자 방법을 써봐야겠다.
(최근에 모던 JS 딥다이브 책으로 while문과 for문의 차이를 공부한 적이 있는데,
for문은 도는 길이가 정해져 있을 때 사용하고 while문은 도는 길이가 명확하지 않을 때 사용한다고 한다)

if 조건문이 들어간 while문으로는 더 짧은 배열까지만 돌 수 있고,
나머지 값을 더 추가하려면 while을 추가로 더 돌아야 했다.
투포인터 알고리즘을 공부할 때, 이중 for문을 사용하면 O(N^2)의 시간복잡도가 나오는 것을
O(N)의 시간복잡도로 해결할 수 있는 방법이라는 걸 알았다.
이번 문제의 while문들은 모두 내부에 다른 반복문을 돌지 않으므로
갯수는 3개이지만 시간복잡도로는 O(N)의 복잡도로 잘 돌고 있다. (시간복잡도에서 상수는 따지지 않으므로 O(3N)이라 하지 않고 O(N)이라고 한다)

시간복잡도를 현저히 줄일 수 있다는 점에서 최적화에 좋은 알고리즘이라 매력적으로 느껴졌다.
검색 기능을 구현할 때 어떻게 하면 더 빠른 속도로 결과를 렌더링할 수 있는지에 관심이 많아서 이런 '연산을 줄일 수 있는 알고리즘'을 만나면 공부 의욕이 확 생기는 느낌이다. ^◡^

다음 문제가 이 문제와 비슷하면서도 약간의 응용이 있는 문제인데,
이 문제 코드에서 익히게 된 개념을 적용해서 혼자 풀어봐야겠다.
</pre>
