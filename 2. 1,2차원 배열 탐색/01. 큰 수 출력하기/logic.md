# 문제

<pre>
N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)

▣ 입력설명
첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.

▣ 출력설명
자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.
</pre>

# BEFORE

<pre>
for문을 돌려 꺼내면서 꺼낸 값과 그 이전 값을 '비교'만 하면 되는 문제라고 생각했다. 
그런데 앞과 뒤를 비교하려면 index를 활용해야 하므로 평소에 편하게 쓰던 for-of문보다는 i를 사용하는 기본 for문을 써야할 것 같다.
그리고 맨 앞의 값은 비교할 이전 값이 없으므로 i를 0이 아닌 1부터 시작해서 돌린다.
</pre>

# AFTER

<pre>
풀고 나서 답을 확인해보니 한 줄만 달라서 뭔가 확인해봤더니 '첫 번째 수는 무조건 출력한다'는 부분을 빼먹은 거였다. 문제를(= 요구사항을) 잘 숙지해야 한다.. ㅎㅎ
</pre>
