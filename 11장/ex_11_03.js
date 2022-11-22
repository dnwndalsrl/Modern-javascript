//  변수에 원시 값을 갖는 변수를 할당하면 할당받는 변수에는 할당되는 변수의 원시 값이 복사되어 전달된다.
// 이를 값에 의한 전달이라 한다.
var score = 80;
var copy = score;

console.log(score); // 80
console.log(copy); //80

/*===================================*/

// score 변수와 copy 변수는 숫자 값 80을 갖는다는 점에서는 동일하지만
// score 변수와 copy 변수의 값 80은 다른 메모리 공간에 저장된 별개의 값이라는걸 명심하자
var score = 80
var copy = score

console.log(score, copy) // 80 80
console.log(score === copy) // true

// 서로 다른 메모리 공간에 저장된 별개의 값이므로 score 변수의 값을 변경해도 copy 변수의 값에는 어떠한 영향도 주지 않음
score = 100;
console.log(score, copy) // 100 80
console.log(score === copy) // false

