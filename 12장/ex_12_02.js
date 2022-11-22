// 변수에 함수 리터럴을 할당
var f = function add(x, y) {
    return x + y
}

// 함수 이름
// 1. 함수 이름은 식별자 이기 때문에, 식별자 네이밍 규칙을 따라야한다.
// 2. 함수 몸체 내에서만 참조할 수 있는 식별자이다.
// 3. 함수 이름은 생략 가능하다. 이름이 있으면 기명 함수 없으면 무명/익명 함수라 한다.

// 매개변수 목록
// 1. 0개 이상의 매개변수를 소괄호로 감싸고 쉼표로 구분
// 2. 매개변수 목록은 순서에 의미가 있다.
// 3. 매개변수는 함수 몸체 내에서 변수와 동일하게 취급된다. 따라서 식별자 네이밍 규칙을 준수해야한다.

// 함수 몸체
// 1. 함수가 호출되었을 때 일괄적으로 실행될 문들을 하나의 실행 단위로 정의한 코드 블록이다.
// 2. 함수 호출에 의해 실행된다.