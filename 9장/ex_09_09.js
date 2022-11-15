// 옵셔널 체이닝 연산자
var elem = null;
var value = elem?.value;
console.log(value); // undefined

/*===================================*/
// 옵셔널 체이닝 연산자가 도입되기 전에는 논리 연산자(&&)를 사용한 단축 평가를 사용했다.
var elem = null;
var value = elem && elem.value;
console.log(value); // null

/*===================================*/
// 논리 연산자 &&는 문자열의 길이(length)를 참조하지 못한다
var str = '';
var length = str && str.length;
console.log(length); // ""

// 옵셔널 체이닝 연산자를 쓰면 좌항 피연산자가 false 여도 null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.
var str = '';
var length = str?.length;
console.log(length); // 0
