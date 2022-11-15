// 메서드
var circle = {
    // 프로퍼티 
    radius: 5,
    // 메서드
    getDiameter: function() {
        return 2 * this.radius; // this는 circle을 가리킨다.
    }
};
console.log(circle.getDiameter()); // 10