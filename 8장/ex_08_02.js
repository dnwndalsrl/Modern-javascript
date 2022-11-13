// 조건문(if ... else 문) 기본 형식
if(조건식) {
    // 조건식이 참이면 이 코드 블록이 실행된다.
} else {
    // 조건식이 거짓이면 이 코드 블록이 실행된다.
}

/*===================================*/
// 조건에 따라 실행될 코드 블록을 늘리고 싶으면 else if 문을 사용한다.
if(조건식1) {
    // 조건식1이 참이면 이 코드 블록이 실행된다.
} else if(조건식2) {
    // 조건식2가 참이면 이 코드 블록이 실행된다.
} else {
    // 조건식1과 조건식2가 모두 거짓이면 이 코드 블록이 실행된다.
}

/*===================================*/
var num = 2;
var kind;

// if문
if(num > 0) {
    kind = '양수'; // 음수를 구별할 수 없다
}
console.log(kind); // 양수

// if ... else 문
if(num > 0) {
    kind = '양수';
} else {
    kind = '음수'; // 0은 음수가 아니다.
}
console.log(kind); // 양수

// if ... else if 문
if(num > 0) {
    kind = '양수';
} else if ( num < 0) {
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind); // 양수

/*===================================*/
// 만약 코드 블록 내의 문이 하나뿐이라면 중괄호 생략 가능
if(num > 0) kind = '양수';
else if(num < 0) kind = '음수';
else kind = '영';
console.log(kind); // 양수

/*===================================*/
// 삼항 조건 연산자로 바꿔 쓸 수 있다.
// x가 짝수이면 result 변수에 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당한다.

// if ... else 문으로 표현
var x = 2;
var result;

if(x % 2) {
    result = '홀수';
} else {
    result = '짝수';
}
console.log(result); // 짝수

// 삼항 조건 연산자로 표현
var x = 2;
var result;

var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

// 삼항 조건 연산자로 표현하는데 경우의 수가 세 가지일경우
var num = 2;
var kind = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(kind); // 양수
