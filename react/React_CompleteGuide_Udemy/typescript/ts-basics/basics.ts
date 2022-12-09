// primitives : number, string, boolean
// More complex types : arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = 'Lee';

let inInstructor: boolean;

inInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = { //타입 별칭
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Lee',
    age: 28
};

let people: Person[];


// Type inference 타입 추론을 사용하는게 좋다.

let course: string | number | boolean = 'React - The Complete Guide';

course = 1234;

// Functions & types

function add( a: number, b: number ) {
    return a + b;
};

function printOutput(value: any){
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');