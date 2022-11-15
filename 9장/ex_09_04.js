// 불리언 타입으로 변환
// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가되는 값) 또는 Falsy 값(거짓으로 평가되는 값으로 구분한다.
// 제어문의 조건식과 같이 불리언 값으로 평가되어야 할 문맥에서 Truthy값은 true로, Falsy 값은 false로 암묵적 타입 변환된다.
if('') console.log('1');
if(true) console.log('2');
if(0) console.log('3');
if('str') console.log('4');
if(null) console.log('5');
// 2 4

/*===================================*/

// false로 평가되는 Falsy 값
// 이 외의 모든 값들은 true로 평가되는 Truthy 값이다.
false
undefined
null
0, -0
NaN
''(빈 문자열)




