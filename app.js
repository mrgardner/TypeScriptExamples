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
