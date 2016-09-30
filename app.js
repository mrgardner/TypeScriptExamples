var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calculateCircumference(diamter) {
            return diamter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
/// <reference path="CircleMath.ts" />
/// <reference path="rectangleMath.ts" />
var CircleMath = MyMath.Circle;
var PI = 2.99;
console.log(MyMath.calculateRectangle(10, 20));
console.log(CircleMath.calculateCircumference(3));
console.log(PI);
