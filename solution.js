var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Exercise 1 - How was your TypeScript Class?
var Car = (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2 - Two objects, based on each other ...
var baseObject = (function () {
    function baseObject() {
        this.width = 0;
        this.length = 0;
    }
    return baseObject;
}());
var rectangle = (function (_super) {
    __extends(rectangle, _super);
    function rectangle() {
        _super.apply(this, arguments);
        this.width = 5;
        this.length = 2;
    }
    rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return rectangle;
}(baseObject));
var rect = new rectangle();
console.log(rect.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var Peoples = (function () {
    function Peoples() {
        this._firstName = "";
    }
    Object.defineProperty(Peoples.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Peoples;
}());
var people = new Peoples();
console.log(people.firstName);
people.firstName = "Ma";
console.log(people.firstName);
people.firstName = "Maximilian";
console.log(people.firstName);
