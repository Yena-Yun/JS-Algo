# 문제

<pre>
철수의 트럭은 C 킬로그램 넘게 태울 수 없다. 
철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
N 마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하시오.
</pre>

# BEFORE

<pre>
[ DFS 간단 개념 ]
DFS는 큐 하나와 스택 하나를 활용한다.
DFS는 상위 노드와 연결된 형제 노드를 먼저 탐색하는 BFS와 달리,
자기 자신과 연결된 자식 노드를 먼저 탐색하기 때문에 stack을 사용하게 된다.

[ 문제 풀이 ]
바둑이 배열로 구할 수 있는 모든 무게합을 DFS로 구한 뒤, C를 넘지 않는 가장 큰 무게를 반환한다.
</pre>

# AFTER

<pre>

</pre>
