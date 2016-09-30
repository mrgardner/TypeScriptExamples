// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo("Matt"));
console.log(echo(27));
console.log(echo({name: "Matt", age: 27}));

// Better Generic
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("Matt"));
console.log(betterEcho<number>(27));
console.log(betterEcho({name: "Matt", age: 27}));

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));

// Generic Classes
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());