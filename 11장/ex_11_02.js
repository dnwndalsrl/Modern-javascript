// 문자열은 0개 이상의 문자로 이루어진 집합이다.
// 1개의 문자는 2바이트의 메모리 공간에 저장된다.
var st1 = ''; // 0개의 문자로 이뤄진 문자열
var str2 = 'Hello'; // 5개의 문자로 이뤄진 문자열

// 자바스크립트의 문자열은 원시 타입이며 변경 불가능하다. 즉 문자열이 생성된 이후에는 변경할 수 없음을 의미함
// 식별자 str은 문자열 'Hello'를 가리키고 있다가 문자열 'world'를 가리키도록 변경되었을뿐이다.
var str = 'Hello';
str = 'world';

// 문자열은 유사 배열 객체로 배열과 유사하게 각 문자에 접근할 수 있다.
var str = 'string';
console.log(str[0]); // s
console.log(str.length); // 6
console.log(str.toUpperCase()); // STRING