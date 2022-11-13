// continue 문
// 문자열에서 특정 문자의 개수를 세는 예
var string = 'Hello World';
var search = 'l';
var count = 0;

// continue 문을 사용하지 않았을 때(if 문 내에 코드를 작성해야함)
for(var i = 0; i < string.length; i++) {
    // 'l'이면 카운트 증가
    if(string[i] === search) {
        count++;
    }
}

// continue 문을 사용했을때(if 문 밖에 코드를 작성할수있음)
for(var i = 0; i < string.length; i++) {
    // 'l'이 아니면 카운트를 증가시키지 않음
    if(string[i] !== search) continue;
    count++;
}