// Exercise 1 - How was your TypeScript Class?
class Car {
    public name: string;
    public acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk() {
        console.log("Toooooooooot!");
    }

    accelerate(speed: number) {
        this.acceleration+= speed;
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...

class baseObject {
    width: number = 0;
    length: number = 0;
}

class rectangle extends baseObject {
    width: number = 5;
    length: number = 2;

    calcSize() {
        return this.width * this.length;
    }
}

let rect = new rectangle();
console.log(rect.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)

class Peoples {
    _firstName: string = "";

    get firstName () {
        return this._firstName;
    }

    set firstName (value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}

let people = new Peoples();
console.log(people.firstName);
people.firstName = "Ma";
console.log(people.firstName);
people.firstName = "Maximilian";
console.log(people.firstName);