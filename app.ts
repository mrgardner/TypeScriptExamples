// string
let myName: string = 'Matt';
// myName = 28; Error

// number
let myAge: number = 22;
// myAge = 'Matt'; Error

// boolean
let hasHobbies: boolean = true;
// hasHobbies = 1; Error

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';  Error

// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 100 Error

// tuples
let address: [string,number] = ["Superstreet", 99];

// enum
enum Color {
    Gray, // 0
    Green = 100, // 1
    Blue = 2 // 2
}

let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

// functions
function returnMYName():string {
    return myName;
}
console.log(returnMYName());

// void
function sayHello():void {
    console.log("Hello!");
}

// argument types

function multiply(value1:number , value2:number):number {
    return value1 * value2;
}
console.log(multiply(10,2));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2));

// objects
let userData: { name:string, age:number } = {
    name: 'Matt',
    age: 22
};
// userData = {
//     a: "Hello",
//     b: 22
// };

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100,3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};
// complex = {};

// type alias

type Complex = {data: number[], output: (all: boolean) => number[]}

let complex2: Complex = {
    data: [100,3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true;

// check types
let finalValue = 22;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}

// never
function neverReturns():never {
    throw new Error('An error!');
}

// nullable types
let canBeNull: number | null= 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;