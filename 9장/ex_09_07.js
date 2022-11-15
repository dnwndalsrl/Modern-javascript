// 불리언 타입으로 변환
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
Boolean('x') // true
Boolean('') // false
Boolean('false') // true
Boolean(0) // false
Boolean(1) // true
Boolean(NaN) // false
Boolean(Infinity) // true
Boolean(null) // false
Boolean(undefined) // false
Boolean({}) // true
Boolean([]) // true

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
!!'x' // true
!!'' // false
!!'false' // true
!!0 // false
!!1; // true
!!NaN // false
!!Infinity // true
!!null // false
!!undefined // false
!!{} // true
!![] // true