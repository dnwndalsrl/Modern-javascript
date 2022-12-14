// 숫자 타입으로 변환
// 산술 연산자 표현식을 평가하기 위해 산술 연산자의 피연산자 중에서
// 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 반환한다.
// 피연산자를 숫자 타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로
// 표현식의 평가 결과는 NaN이 된다.

// 문자열 타입
+'' // 0
+'0' // 0
+'1' // 1
+'string' // NaN

// 불리언 타입
+true // 1
+false // 0

// null 타입
+null // 0

// undefined 타입
+undefined // NaN

// 심벌 타입
+Symbol() // TypeError: Cannot convert a Symbol value to a number

// 객체 타입
+{} // NaN
+[] // 0
+[10, 20] // NaN
+(function(){}) // NaN

/*===================================*/

// 비교 연산자의 역할은 불리언 값을 만드는 것이다.
// > 비교 연산자는 피연산자의 크기를 비교하므로 모든 피연산자는 코드의 문맥상 모두 숫자 타입이여야 한다.

'1' > 0 // true