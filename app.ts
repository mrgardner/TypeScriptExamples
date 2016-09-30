interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log("Hello, "+ person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

const person: NamedPerson = {
    firstName: "Matt",
    hobbies: ["Cooking", "Sports"],
    age: 22,
    greet(lastName: string) {
        console.log("Hi, I am "+ this.firstName + " " + lastName);
    }
};

// greet({firstName: "Matt", age: 22});
changeName(person);
greet(person);
person.greet("Anything");

class Person implements NamedPerson {
    firstName: string;
    lastName: string;
    greet(lastName: string) {
        console.log("Hi, I am "+ this.firstName + " " + lastName);
    }
}

const myPerson = new Person();
myPerson.firstName = "Matt";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);

// Function Types


interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1: number, value2: number) {
    return (value1 + value2) * 2
};

console.log(myDoubleFunction(10,20));


// Interface Inheritance

interface AgedPerson extends NamedPerson {
    age: number
}

const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Matt",
    greet(lastName: string) {
        console.log("Hello!");
    }
};

console.log(oldPerson);