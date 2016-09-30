define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.PI = 3.14;
    function calculateCircumference(diamter) {
        return diamter * exports.PI;
    }
    exports.calculateCircumference = calculateCircumference;
});
