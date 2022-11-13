// 논리합(OR) 연산자
true || true; // true
true || false; // true
false || true; // true
false || false; // false

// 논리곱(AND) 연산자
true && true; // true
true && false; // false
false && true; // false
false && false; // false

// 논리 부정 연산자
// 언제나 불리언 값을 반환한다. 피연산자가 불리언 값이 아니면 불리언 타입으로 암묵적 타입 변환된다.
!true; // false
!false; // true
!0; //true
!"Hello"; // false