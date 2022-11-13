// while 문
// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행
var count = 0;

while(count < 3) {
    console.log(count); // 0 1 2
    count++;
}

/*===================================*/
// 무한루프
var count = 0;

while (true) {
    console.log(count);
    count++;
    // count가 3이면 코드 블록을 탈출한다.
    if(count === 3) break;
} // 0 1 2