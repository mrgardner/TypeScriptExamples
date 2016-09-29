// let & const
console.log("LET & CONST");
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99;  Won't Work

// Block scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1: number, number2:number):number {
    return number1 + number2;
};
console.log(addNumbers(10,3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10,3));

const greet = () => {
    console.log("Hello!")
};
greet();

const greetFriend = friend => console.log(friend);

greetFriend("Manu");

//Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10):void => {
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();

// Rest & Spread
console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(33,99,10,-3));
console.log(Math.max(...numbers));

function makeArray(...args: number[]) {
    return args;
}
console.log(makeArray(1,2,6));

// Destructuring
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData = {userName: "Matt", age: 22};
const {userName: myName, age: myAge} = userData;
console.log(myName, myAge);

// Template Literals
console.log("TEMPLATE LITERALS");
const userName = "Matt";
const greeting = `This is a heading!
I'm ${userName}.
This is cool!`;
console.log(greeting);

