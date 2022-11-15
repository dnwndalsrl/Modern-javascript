// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.
var x = 10;
var str = x.toString()
console.log(typeof str, str);; // string 10
console.log(typeof x, x) // number 10

// 암묵적 타입 변환(타입 강제 변환)
// 개발자의 의도와는 상관없이 표현식을 평가하는 도중에
// 자바스크립트 엔진에 의해 암묵적으로 타입이 자동변환되는것
var x = 10;
var str = x + '';
console.log(typeof str, str); // string 10
console.log(typeof x, x); // number 10
