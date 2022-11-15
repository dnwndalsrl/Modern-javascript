// null 병합 연산자
var foo = null ?? 'default string';
console.log(foo); // default string

/*===================================*/
// null 병합 연산자가 도입되기 전에는 논리 연산자(||)를 사용한 단축 평가를 사용했다.
var foo = '' || 'default string';
console.log(foo); // default string

/*===================================*/
// 논리 연산자 ||는 Falsy 값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있음
var foo = '' || 'default string';
console.log(foo); // default string

// null 병합 연산자는 좌항의 피연산자가 Falsy 값이더라도 null 또는 undefined가 아니면 좌항의 피연산자를 그대로 반환한다.
var foo = '' ?? 'default string';
console.log(foo); // ""