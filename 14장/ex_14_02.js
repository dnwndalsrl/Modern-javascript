// 즉시 실행 함수
// 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.
// 이 방법을 사용하면 전역 변수를 생성하지 않으므로 라이브러리 등에 자주 사용됨
(function () {
    var foo = 10 // 즉시 실행 함수의 지역 변수
}())

/*===================================*/

// 네임스페이스 객체
// 전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법
var MYAPP = {} // 전역 스페이스 객체
MYAPP.person = {
    name: 'Lee',
    address: 'Seoul'
}

/*===================================*/

// 모듈 패턴
// 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈로 만든다.
// 클로저를 기반으로 동작하며, 전역 변수의 억제는 물론 캡슐화까지 구현할 수 있다.

var Counter = (function () {
    // private 변수
    var num = 0

    // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
    return {
        increase() {
            return ++num
        },
        decrease() {
            return --num
        }
    }
}())

// private 변수는 외부로 노출되지 않는다.
console.log(Counter.num) // undefined
console.log(Counter.increase()) // 1
console.log(Counter.increase()) // 2
console.log(Counter.decrease()) // 1
console.log(Counter.decrease()) // 0

/*===================================*/

// ES6 모듈
// ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공하므로 더는 전역 변수를 사용할 수 없다.
// 즉 모듈 내에서 var 키워드로 선언한 변수는 더는 전역 변수가 아닌 window 객체의 프로퍼티도 아니다.

