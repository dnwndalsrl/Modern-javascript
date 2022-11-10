// 모두 숫자 타입이다.
var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수

/*===================================*/

// 정수, 실수, 2진수, 8진수, 16진수 리터럴은 모두 64비트 부동소수점 형식의 2진수로 메모리에 저장된다.
// 따로 진수를 표현하기 위한 데이터 타입을 제공하지 않기 때문에, 모두 10진수로 해석된다.
// 표기법만 다를 뿐 모두 같은 값이다.
var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65
console.log(binary === octal); // true
console.log(octal === hex); // true

/*===================================*/ 

// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5

/*===================================*/

// 숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
console.log(10 / 0); // Infinity(양의 무한대)
console.log(10 / -0); // -Infinity(음의 무한대)
console.log(1 * "String"); // NaN(산술 연산 불가) = not-a-number

/*===================================*/

// 자바스크립트는 대소문자를 구별하므로 NaN을 NAN, Nan, nan과 같이 표현하면 에러가 발생한다.
var x = nan; // ReferenceError: nan is not defined
