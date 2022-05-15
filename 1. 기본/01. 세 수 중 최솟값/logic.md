# 문제

100 이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다)

# BEFORE

<pre>
A와 B를 비교하고, B와 C를 비교하는 방향으로 진행
min(최솟값) 변수 선언하고 
A가 B보다 작으면 min = A, 아니면 min = B

1) min = A의 경우
A가 C보다 작으면 최종 min은 A, 아니면 최종 min은 C

2) min = B인 경우
B가 C보다 작으면 최종 min은 B, 아니면 최종 min은 C 

가장 작은 값만 알면 되니까 나머지 두 값 비교는 없이 answer 도출

</pre>

# AFTER

<pre>
  A로 먼저 min을 초기화해놓고,
  B가 min(A)보다 작으면 min을 B로 교체, 아니면 min은 그대로 A

  이후 C를 min과 비교해서 min이 A든 B든 상관없이 C가 min보다 더 작다면 min을 C로 교체

  여기까지 하고 나면 min에는 A, B, C 세 개 중 가장 작은 값이 담겨 있다.
  => answer 출력

</pre>
