// 조건문(switch 문)기본 형식
// case 문은 상황을 의미하는 표현식을 지정하고 콜론으로 마친다. 그리고 그 뒤에 실행할 문들을 위치시킨다.
// switch 문의 표현식과 일치하는 case 문이 없다면 실행 순서는 default 문으로 이동한다. 이는 선택사항으로 사용할 수도 있고, 않을 수도 있다.
switch(표현식) {
    case 표현식1:
        // switch 문의 표현식과 표현식 1이 일치하면 실행될 문;
        break;
    case 표현식2:
        // switch 문의 표현식과 표현식 2이 일치하면 실행될 문;
        break;
    default:
        // switch 문의 표현식과 일치하는 case 문이 없을 때 실행될 문;
}

/*===================================*/
// 월을 영어로 변환한다. (11 => 'November')
// 실행결과를 보면 우리가 원하는 답이 나오지 않는 모습이 보인다.
// 왜냐하면 표현식의 평가 결과와 일치하는 case 문으로 실행 흐름이 이동하여 문을 실행한 것은 맞지만
// 문을 실행 후 switch 문을 탈출하지 않고 switch 문이 끝날때까지 이후의 모든 case 문과 default 문을 실행했기 때문이다.
// 이를 폴스루 라고 칭한다.
var month = 11;
var monthName;

switch(month) {
    case 1: monthName = 'January';
    case 2: monthName = 'February';
    case 3: monthName = 'March';
    case 4: monthName = 'April';
    case 5: monthName = 'May';
    case 6: monthName = 'June';
    case 7: monthName = 'July';
    case 8: monthName = 'August';
    case 9: monthName = 'September';
    case 10: monthName = 'October';
    case 11: monthName = 'November';
    case 12: monthName = 'December';
    default: monthName = 'Invalid month';
}
console.log(monthName) // Invalid month

// break 문은 코드 블록에서 탈출하는 역할을 한다.
// break 문이 없다면 case 문의 표현식과 일치하지 않더라도 실행 흐름이 다음 case 문으로 연이어 이동한다.
switch(month) {
    case 1: monthName = 'January';
        break;
    case 2: monthName = 'February';
        break;
    case 3: monthName = 'March';
        break;
    case 4: monthName = 'April';
        break;
    case 5: monthName = 'May';
        break;
    case 6: monthName = 'June';
        break;
    case 7: monthName = 'July';
        break;
    case 8: monthName = 'August';
        break;
    case 9: monthName = 'September';
        break;
    case 10: monthName = 'October';
        break;
    case 11: monthName = 'November';
        break;
    case 12: monthName = 'December';
        break;
    default: monthName = 'Invalid month';
}
console.log(monthName) // November

/*===================================*/
// 폴스루가 유용한 경우
// 윤년인지 판별해서 2월의 일수를 계산하는 식
var year = 2000; // 2000년은 윤년으로 2월이 29일이다.
var month = 2;
var days = 0;

switch(month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        // 윤년 계산 알고리즘
        // 1. 연도가 4로 나누어 떨어지는 해(2000, 2004, 2008, 2012, 2016, 2020...)는 윤년이다
        // 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어 떨어지는 해 (2000, 2100, 2200...)는 평년이다.
        // 3. 연도가 400으로 나누어떨어지는 해(2000, 2400, 2800...)는 윤년이다.
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invalid month');
}
console.log(days); // 29
