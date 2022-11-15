// 메서드 축약 표현
// 1. ES5
var obj = {
    name: 'Lee',
    sayHi: function() {
        console.log('Hi! ' + this.name);
    }
};
obj.sayHi(); // Hi! Lee

// 2. ES6
const obj = {
    name: 'Lee',
    sayHi() {
        console.log('Hi! ' + this.name);
    }
};
obj.sayHi(); // Hi! Lee