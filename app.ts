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