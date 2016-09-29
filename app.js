// string
var myName = 'Matt';
// myName = 28; Error
// number
var myAge = 22;
// myAge = 'Matt'; Error
// boolean
var hasHobbies = true;
// hasHobbies = 1; Error
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';  Error
// array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 100 Error
// tuples
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMYName() {
    return myName;
}
console.log(returnMYName());
// void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(10, 2));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: 'Matt',
    age: 22
};
// userData = {
//     a: "Hello",
//     b: 22
// };
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = "27";
// myRealRealAge = true;
// check types
var finalValue = 22;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
