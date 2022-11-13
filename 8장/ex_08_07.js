// break 문
if (true) {
    break; // Uncaught SyntaxError: Illegal break statement
}

/*===================================*/
// 레이블 문
// 프로그램의 실행 순서를 제어하는 데 사용한다.(switch 문의 case 문과 default 문도 레이블 문이다.)
// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log('foo');

foo: {
    console.log(1);
    break foo; // foo 레이블 블록문을 탈출한다.
    console.log(2);
}

console.log('Done!');

/*===================================*/
// outer 라는 식별자가 붙은 레이블 for 문
// 레이블 문은 중첩된 for 문 외부로 탈출할때 유용
// 하지만 레이블 문은 프로그램의 흐름이 복잡해져서 가독성이 나빠지고 오류를 발생시킬 가능성이 높아지기 때문에 사용을 권장하진않음
outer: for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
        // i + j === 3이먄 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
        if(i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}
console.log('Done!');

/*===================================*/
// 문자열에서 특정 문자의 인덱스를 검색하는 예
var string = 'Hello World';
var search = 'l';
var index;

// 문자열은 유사 배열이므로 for 문으로 순회 가능
for(var i = 0; i < string.length; i++) {
    if(string[i] === search) {
        index = i;
        break;
    }
}
console.log(index); // 2