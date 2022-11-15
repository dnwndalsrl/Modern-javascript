// 문자열 타입으로 변환
// 문자열 연결 연산자 표현식을 평가하기 위해 문자열 연결 연산자의 피연산자 중에서
// 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적 타입 변환한다.

1 + '2' // "12"
`1 + 1 = ${1 + 1}` // "1 + 1 = 2"

// 숫자 타입
0 + '' // "0"
-0 + '' // "0"
1 + '' // "1"
-1 + '' // "-1"
NaN + '' // "NaN"
Infinity + '' // "Infinity"
-Infinity + '' // "-Infinity"

// 불리언 타입
true + '' // "true"
false + '' // "false"

// null 타입
null + '' // "null"

// undefined  타입
undefined + '' // "undefined"

// 심벌 타입
(Symbol()) + '' // TypeError: Cannot convert a Symbol value to a string

// 객체 타입
({}) + '' // "[object Object]"
Math + '' // "[object Math]"
[] + '' // ""
[10, 20] + '' // "10, 20"
(function () {}) + '' // "function(){}"
Array + '' // "function Array() { [native code] }"