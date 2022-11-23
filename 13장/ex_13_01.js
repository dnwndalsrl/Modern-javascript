function add(x, y) {
    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다
    // 즉, 매개변수 스코프는 함수 몸체 내부다.
    console.log(x, y) // 2 5
    return x + y
}

/*===================================*/
// 모든 식별자는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다.
// 이를 스코프라고 말하며, 즉 스코프는 식별자가 유효한 범위를 말한다.
var var1 = 1; // 코드의 가장 바깥영역에서 선언한 변수
if(true) {
    var var2 = 2; // 코드 블록 내에서 선언한 변수
    if(true) {
        var var3 = 3 // 중첩된 코드 블록 내에서 선언한 변수
    }
}

function foo() {
    var var4 = 4; // 함수 내에서 선언한 변수
    function bar() {
        var var5 = 5 // 중첩된 함수 내에서 선언한 변수
    }
}

console.log(var1) // 1
console.log(var2) // 2
console.log(var3) // 3
console.log(var4) // ReferenceError
console.log(var5) // ReferenceError

/*===================================*/
// 스코프는 식별자를 검색할 때 사용하는 규칙이기도한다.
// 바깥 영역에 선언된 x변수는 어디서든 참조 가능하지만, 함수 내에서 선언된 x변수는 함수 내부에서만 참조 가능하다.
// 즉 식별자 이름은 동일하지만 자신이 유효한 범위, 즉 스코프가 다른 별개의 변수이다.

var x = 'global'

function foo() {
    var x = 'local'
    console.log(x)
}
foo()
console.log(x)