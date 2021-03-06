# 문제

<pre>
격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 
크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 
크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 출력
</pre>

# BEFORE

<pre>
먼저 뽑은 인형을 넣을 stack을 하나 선언한다.
크레인이 내려가는 위치인 moves 값에 따라 board의 해당 열을 찾아 
'세로로' 내려가면서 요소가 '0'이 아닌 첫 번째 값(= 집어올릴 인형)을 찾아 stack에 넣는다.
이때 이전 값(= stack의 맨 위의 값)과 같은 값이 들어가면 
stack에서 값을 하나 꺼내고 answer에 2를 더한다. (= 인형 2개가 터뜨려짐)
</pre>

# AFTER

<pre>
[ 문제 힌트 ]
board에서 뽑은 인형을 표현할 때 for문을 2개 돌릴 필요 없이
board의 '열'은 moves의 각 요소와 동일하므로 바로 moves 값을 가지고 열을 표현해주면 된다.

뽑은 인형이 stack의 마지막 요소와 같으면 
pop해서 꺼내고 answer에 뽑은 인형 수를 2개 추가,
뽑은 인형이 stack의 마지막 요소와 다르면 stack에 그대로 인형을 쌓아나간다.
</pre>
