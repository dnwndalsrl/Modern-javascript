// 템플릿 리터럴은 백틱(``)을 사용해 표기한다.
var template = `Template literal`;
console.log(template); //Template literal

/*===================================*/

// 멀티라인 문자열
// 일반 문자열 내에서는 줄바꿈(개행)이 허용되지 않는다.
var str = 'Hello
world.'; // SyntaxError: Invalid or unexpeted token

// 따라서 일반 문자열 내에서 줄바꿈 등의 공백을 표현하려면 백슬래시(\)러 시작하는 이스케이프 시퀀스를 사용해야한다.
// 이스케이프 시퀀스
// \0 = Null
// \b = 백스페이스
// \f = 프린터로 출력할 경우 다음 페이지의 시작 지점으로 이동한다.
// \n = 개행, 다음 행으로 이동
// \r = 개행, 커서를 처음으로 이동
// \t = 탭(수평)
// \v = 탭(수직)
// \uXXXX = 유니코드, 예를들어 '\u0041' = 'A'
// \' = 작은따옴표
// \"" = 큰따옴표
// \\ = 백슬래시

// 예를들어 줄바꿈과 들여쓰기가 적용된 HTML문자열을 만들어보면
var template = '<ul>\n\t<li><a href = "#">Home</a></li>\n</ul>';
console.log(template); // 출력결과
                      // <ul>
                      //    <li><a href="#">Home</a></li>
                      // <ul>

// 템플릿 리터럴 내에서느 이스케이프 시퀀스를 사용안해도 줄바꿈과 공백이 허용된다
var template = `<ul>
    <li><a href="#">Home</a></li>
</ul>
`;
console.log(template) // 출력결과
                      // <ul>
                      //    <li><a href="#">Home</a></li>
                      // <ul>

/*===================================*/
// 표현식 삽입
// 문자열은 문자열 연산자 +를 사용해 연결할 수 있다.
// + 연산자는 피 연산자 중 하나 이상이 문자열인 경우 문자열 연산자로 동작한다. 그 외의 경우는 덧셈 연산자
var first = "Ung-mo";
var last = "Lee";

// 문자열 연결(ES5)
console.log('My name is ' + first + ' ' + last + '.'); // My name is Ung-mo Lee.

// 템플릿 리터럴을 사용한 표현식 삽입(ES6)
console.log(`My name is ${first} ${last}.`); // My name is Ung-mo Lee.

console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3

// 표현식 삽입은 반드시 템플릿 리터럴 내에서 사용해야 한다.
console.log('1 + 2 = ${1 + 2}'); // 1 + 2 = ${1 + 2}





