# 문제

<pre>
팰린드롬 = 회문 문자열의 영어?
입력된 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력
(알파벳 이외의 문자들은 무시)
</pre>

# BEFORE

<pre>
이 문제에서 키포인트는 '알파벳 이외의 문자들은 무시'한다는 부분이다. 
그 외에는 3-1 회문문자열 문제와 똑같다.
즉, 알파벳 이외의 문자열은 정규식으로 삭제한 뒤 
나머지는 회문문자열 문제처럼 풀면 되겠다는 생각이 들었다.
정규식은 문자가 아닌 숫자나 특수문자를 찾아 빈 문자열로 replace하는 방식을 사용했다.
</pre>

# AFTER

<pre>
답 코드에서는 미리 소문자 형태로 바꾼 뒤에 정규식을 더 줄여서 쓰는 방법을 사용하고 있었다. 
그 외에는 for문 대신 reverse로 간단히 처리했다. 
사실 for문 돌리는 것보다 자바스크립트 메서드를 쓰는 것이 
코드 간결화에는 도움이 된다고 생각한다. (길어지면 이해하기가 힘들어져서 그렇지..) 
</pre>
