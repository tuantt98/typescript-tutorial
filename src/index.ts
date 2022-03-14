const id: number = 5;
const company: string = "Google";
let isPublished: boolean = true;
let x: any = "Hello";

const ids: number[] = [1, 2, 3];
ids.push(4);
const myArray: Array<number> = [1, 2, 3];

// Tuple
let person: [string, number] = ["John", 23];

// Tuple Array
let employees: [string, number][] = [
  ["John", 23],
  ["Jane", 24],
];

// Union
let union: string | number = "John";
union = 23;

// Enum
enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
}

// Object
type User = {
  name: string;
  age: number;
};
const user: User = { name: "John", age: 23 };

// Type Assertion
const value: any = "John";
const strLength: number = (value as string).length;

// Function
function addNum(a: number, b: number): number {
  return a + b;
}

function log(message: any): void {
  console.log(message as string);
}

// Interface
interface Person {
  readonly id: number;
  name: string;
  age: number;
}
const user1: Person = { name: "John", age: 23, id: 1 };

interface MathFunc {
  (a: number, b: number): number;
}
type myFunc = (a: number, b: number) => number;

const add: MathFunc = (a: number, b: number) => a + b;

const add2: myFunc = (a: number, b: number) => a + b;

const sub: MathFunc = (a: number, b: number) => a - b;

// Classes
interface PersonInterface {
  name: string;
  age: number;
  register(): string;
}

class PersonClass implements PersonInterface {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  register() {
    return `${this.name} is registered`;
  }
}

const kuro = new PersonClass("Kuro", 23);
console.log(kuro);
kuro.register();

// Subclass
class EmployeeClass extends PersonClass {
  constructor(name: string, age: number, private salary: number) {
    super(name, age);
  }
  getSalary() {
    return this.salary;
  }
}

const emp = new EmployeeClass("John", 23, 2000);
console.log(emp.register());

// Generics
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
const numArray = getArray<number | string>([1, 2, 3]);
const strArray = getArray<string>(["a", "b", "c"]);
numArray.push("4");
log(strArray);
log(numArray);
