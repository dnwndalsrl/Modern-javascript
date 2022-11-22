// 외부 상태, 즉 함수 외부에서 함수 몸체 내부로 전달한 원시 값의 원본을 변경하는 어떠한 부수 효과도 발생하지 않는다.
// 외부 상태, 즉 함수 외부에서 함수 몸체 내부로 전달한 참조 값에 의해 원본 객체가 변경되는 부수 효과가 발생한다.

// 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj) {
    primitive += 100
    obj.name = 'Kim'
}

// 외부 상태
var num = 100;
var person = { name: 'Lee' }

console.log(num) // 100
console.log(person) // {name: 'Lee'}

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person)

// 원시 값은 원본이 훼손되지 않는다.
console.log(num) // 100

// 객체는 원본이 훼손된다.
console.log(person) // {name: "Kim"}