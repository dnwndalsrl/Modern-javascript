// 메모리 상에서 원본 person을 사본 copy에 할당하면 원본 person 참조 값을 복사해서 copy에 저장한다.
// 다시말해 원본 person과 사본 copy는 저장된 메모리 주소는 다르지만 동일한 참조 값을가지고, 즉 동일한 객체를 가리킨다
// 이것은 두 개의 식별자가 하나의 객체를 공유한다는 것을 의미함
var person = {
    name: 'Lee'
}

// 참조값을 얕은 복사
var copy = person

console.log(copy === person) // true

// copy를 통해 객체를 변경
copy.name = 'Kim'

// person을 통해 객체를 변경
person.address = 'Seoul'

console.log(person) // {name: "Kim", address: "Seoul"}
console.log(copy) // {name: "Kim", address: "Seoul"}