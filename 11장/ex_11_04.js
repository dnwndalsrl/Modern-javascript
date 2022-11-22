// 객체를 할당한 변수가 기억하는 메모리 주소를 통해 메모리 공간에 접근하면 참조 값에 접근할 수 있다.
// 참조 값은 생성된 객체가 저장된 메모리 공간의 주소 그 자체다.
var person = {
    name: 'Lee'
}

console.log(person) // {name: 'Lee'}

/*===================================*/

// 원시 값은 변경 불가능한 값이므로 값을 변경하려면 재할당 외에는 방법이 없다.
// 하지만 객체는 변경 가능한 값이므로, 재할당 없이 객체를 직접 변경 가능하다.
// 즉 재할당 없이 프로퍼티를 동적으로 추가, 갱신, 삭제 할수도 있다.
var person = {
    name: 'Lee'
}

// 값 갱신
person.name = 'Kim'

// 동적 생성
person.address = 'Seoul'

console.log(person) // {name: "Kim", address: "Seoul"}