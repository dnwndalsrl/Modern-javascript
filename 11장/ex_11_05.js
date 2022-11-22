// 얕은 복사와 깊은 복사
// 얕은 복사는 한 단계까지만 복사하는 것을 말하고, 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사하는 것을 말한다.

const o = { x: { y: 1} }

// 얕은 복사
// 객체에 중첩되어 있는 객체의 경우 참조 값을 복사
const c1 = { ...o }
console.log(c1 === o) // false
console.log(cl.x === o.x) // true

// 깊은 복사
// lodash cloneDeep을 사용한 깊은 복사
// 객체에 중첩되어 있는 객체까지 모두 복사
const _ = require('lodash')

const c2 = _.cloneDeep(o)
console.log(c2 === o) // false
console.log(c2.x === o.x) // false
