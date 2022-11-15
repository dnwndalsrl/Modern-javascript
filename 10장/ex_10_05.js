// 프로퍼티 접근
var person = {
    name: 'Lee'
};

// 마침표 표기법
console.log(person.name); // Lee

// 대괄호 표기법
// 대괄호 프로퍼티 접근 연사자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다.
// 감싸지 않았을경우 자바스크립트 엔진은 식별자로 해석하여 ReferenceError가 발생한다.
console.log(person['name']); // Lee

/*===================================*/
// 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다.
var person = {
    name: 'Lee'
};
console.log(person.age); // undefined

/*===================================*/
// 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않는 이름이면 반드시 대괄호 표기법을 사용해야한다.
// 단 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
var person = {
    'last-name': 'Lee',
    1: 10
};
person.'last-name'; // SyntaxError: Unexpected string
person.last-name; // 브라우저 환경: NaN
                  // Node.js 환경: ReferenceError: name is not defined
person[last-name]; // ReferenceError: last is not defined
person['last-name']; // Lee

person.1; // SyntaxError: Unexpected number
person.'1'; // SyntaxError: Unexpected string
person[1]; // 10 
person['1']; // 10