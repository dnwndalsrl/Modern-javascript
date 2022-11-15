// 계산된 프로퍼티 이름
// 1. ES5
var prefix = 'prop';
var i = 0;
var obj = {};

obj[prefix + '-' + ++i];
obj[prefix + '-' + ++i];
obj[prefix + '-' + ++i];

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

// 2. ES6
// 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 동적 생성 가능
const prefix = 'prop';
let i = 0;

const obj = {
    [`${prefix}-${++i}`] : i,
    [`${prefix}-${++i}`] : i,
    [`${prefix}-${++i}`] : i
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
