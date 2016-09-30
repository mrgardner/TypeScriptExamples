var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diamter) {
        return diamter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
