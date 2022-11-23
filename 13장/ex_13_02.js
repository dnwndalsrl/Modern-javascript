// 지역 스코프
// 1. 지역이란 함수 몸체 내부를 말한다.
// 2. 지역 변수는 자신의 지역 스코프와 하위 지역 스코프에서 유효하다.
function outer() {
    var z = 'outer local z'
    function inner() {
        var x = 'inner local x'
    }
    inner()
}

// 전역 스코프
// 1. 전역이란 코드의 가장 바깥 영역을 말한다.
// 2. 전역 변수는 어디서든지 참조할 수 있다.
var x = "global x"
var y = "global y"