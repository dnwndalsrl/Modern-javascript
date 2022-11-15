// 프로퍼티 삭제
var person = {
    name: 'Lee'
};
// 프로퍼티 동적생성
person.age = 20;
// age 프로퍼티 삭제
delete person.age;
// address 프로퍼티는 존재하지않는다. 그래서 delete 연산자로 삭제할수없지만 에러는 발생하지 않는다.
delete person.address;
console.log(person); // {name: "Lee"}