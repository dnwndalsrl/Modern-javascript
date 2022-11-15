// 아래의 예처럼 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환하는것을 단축 평가라한다.
// 즉 단축평가는 표현식을 평가하는 도중에 평가결과가 확정된 경우 나머지 평가 과정을 생략하는 것을 말한다.

// 논리 연산자를 사용한 단축 평가
// 논리곱 연산자는 두 개의 피연산자 모두 true로 평가될 때 true를 반환한다.
// 논리곱 연산자는 좌항에서 우항으로 평가가 진행된다.
// 첫번째 피연산자가 true로 평가되므로, 두 번째 피연산자까지 평가해보아야 표현식을 평가할 수 있다.
// 이때 논리곱 연산자는 논리 연산의 결과를 결정하는 두 번째 피 연산자 즉 문자열 'Dog'를 그대로 반환한다.
'Cat' && 'Dog' // "Dog"

/*===================================*/

// 논리합 연산자는 두 개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다.
// 첫 번째 피연산자가 true로 평가되므로, 두 번째 피연산자까지 평가해 보지 않아도 표현식을 평가할 수 있다.
// 이때 논리합 연산자는 논리 연산의 결과를 결정하는 첫 번째 피 연산자 즉 문자열 'Cat'을 그대로 반환한다.
'Cat' || 'Dog' // "Cat"

/*===================================*/

// 논리합 연산자의 예
'Cat' || 'Dog' // "Cat"
false || 'Dog' // "Dog"
'Cat' || false // "Cat"

// 논리곱 연산자의 예
'Cat' && 'Dog' // "Dog"
false && 'Dog' // false
'Cat' && false // false

/*===================================*/
// 어떤 조건이 Truthy 값일 때 무언가를 해야한다면 논리곱 연산자 표현식으로 if문을 대체할 수 있다.
var done = true;
var message = '';

// if문 사용
if(done) message = '완료';
// 논리곱 연산자 표현식 사용
message = done && '완료';
// 삼항 조건 연산자는 if ... else 문을 대체할수있음
message = done ? '완료' : '미완료';

/*===================================*/

// 단축 평가의 유용한 패턴
// 1. 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
var elem = null;
var value = elem.value; // TypeError: Cannot read property 'value' of null
var value = elem && elem.value; // null

// 2. 함수 매개변수에 기본값을 설정할 때
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLengthOne(str) {
    str = str || '';
    return str.length;
}
getStringLengthOne(); // 0
getStringLengthOne('hi'); // 2

// ES6의 매개변수의 기본값 설정
function getStringLengthTwo(str = '') {
    return str.length;
}
getStringLengthTwo(); // 0
getStringLengthTwo('hi'); // 2



