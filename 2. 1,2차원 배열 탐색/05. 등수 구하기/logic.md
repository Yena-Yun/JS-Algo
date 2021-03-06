# 문제

<pre>
N(1<=N<=100)명의 학생의 국어점수가 입력되면 
각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 N(3<=N<=1000)이 입력되고, 
두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력된다. 
같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 
즉 가장 높은 점수가 92점인데
92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

▣ 출력설명
입력된 순서대로 등수를 출력한다.
</pre>

# BEFORE

<pre>
등수를 구하는 문제인데 다음의 조건 때문에 조금 까다롭다.

"같은 점수가 입력되면 모두 높은 등수로 처리하고, 
같은 점수의 명수만큼 다음 점수의 학생의 등수가 밀린다." 
(같은 점수가 3명이면 3명 다 1등으로 처리하되 다음 학생의 등수는 4등으로 처리하는 식)

실제 문제에서는 주어진 배열 내에 같은 점수가 없어서 
임의로 같은 점수 3명을 넣어 배열을 변경하여 문제를 풀었다.
(=> 출력 예정 답: [6, 5, 2, 2, 1, 2])

처음에 등수 변수는 Array.from을 이용하여 전부 0으로 초기화한 배열을 생성했다.
그리고 들어온 점수 배열과 똑같이 돌면서 
꺼낸 점수(=현재 점수)가 현재까지의 max 점수보다 높다면
전체 등수 배열에 1을 더했고(= 한 등 밀림)
꺼낸 점수가 이전 점수보다 낮다면
꺼낸 점수의 index번째 등수 배열에 1을 더했다.

더 높은 점수가 등장했을 때 업데이트 되는 max 변수가 필요할 것 같고, 처음에 등장하는 점수는 무조건 1등이되,
뒤로 갈수록 더 높은 점수가 있다면 한 등씩 밀리는 구조로 가야할 것 같다.
</pre>

# AFTER

<pre>
[1번째 풀이]
max값을 인수로 들어온 배열(arr)의 첫번째 값으로 초기화하고
i를 그 다음부터 돌면서 더 높은 점수가 들어오면 max를 업데이트하고
등수 배열인 rankArr를 j로 돌면서 0부터 i번째 차례까지 전부 1씩 더하는 로직으로 풀어보았다.

근데 이렇게 하면 나중에 같은 점수가 나왔을 때나 
max 점수(100) 이후로 같은 점수가 나왔을 때 처리가 곤란했다.
같은 점수 나왔을 때의 로직을 너무 모르겠어서 답을 잠깐 보고
이중 for문이 필요하다는 사실을 확인하고 문제를 다시 풀었다.

[2번째 풀이]
이중 for문이 왜 필요할까 생각해보니 
인수로 들어온 배열 안에서 각 점수가 배열 내의 점수들보다 
큰지 작은 지를 모두 일일이 비교해야 해서였다.

반복되는 arr.length는 n으로 치환했고
풀고나니 생각보다 짧은 코드에 조금 허탈했지만..
앞으로 등수 문제 나오면 기억해뒀다가 참고할 만한 문제였다.
그리고 Array.from 첨에 봤을 땐 너무 어려웠고 기억하기 어려운 메서드였는데 
이제 나름 자연스럽게 쓸 수 있게 된 것 같아서 뿌듯하다. ㅎㅎ

</pre>
