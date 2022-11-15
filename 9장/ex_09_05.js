// 문자열 타입으로 변환
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
String(1); // "1"
String(NaN); // "NaN"
String(Infinity); // "Infinity"
String(true); // "true"
String(false); // "false"

// 2. Object.prototype.toString 메서드를 사용하는 방법
(1).toString(); // "1"
(NaN).toString(); // "NaN"
(Infinity).toString(); // "Infinity"
(true).toString(); // "true"
(false).toString(); // "false"

// 3. 문자열 연결 연산자를 이용하는 방법
1 + ''; // "1"
NaN + ''; // "NaN"
Infinity + ''; // "Infinity"
true + ''; // "true"
false + ''; // "false"