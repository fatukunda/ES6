import { callbackify } from "util";

//Diclaring variables with let..................................
// function run() {
//     //variable b declared
//     let b = 2;
//     console.log(b);
//     //Another variable b declared in a different scope and doesn't affect the other variable b above
//     {
//         let b = 3;
//         console.log(b);
//     }

// }
// run();


//Diclaring variables with const.................................
// const numbers = [1,2,3];
// //the variable cannot be re-assigned but it can be modified.
// numbers.push(4)
// console.log(numbers);

//Template literals
// const a = 'hello';
// const b = 'world';
// console.log(`${a} ${b}`);

//The spread operator .........................................
// let array1 = [ 7,8,9];
// let array2 = [6, ...array1, 10];
// console.log(array2);

// function print(a, b, c) {
//     console.log(a, b, c);
// };
// let z = [1,2,3];
// print(...z);

// function print2(...a) {
//     console.log(a);
// };
// let x = [1,2,3];
// print2(x);

// function butter(...b) {
//     let a = [1, 2, 3, ...b];
//     console.log( a);
//   }
  
//   butter(4, 5, 6);

//Destructuring arrays ................................................
// const numbers = [200, 400, 500];
// const [a, b, c] = numbers;
// console.log(a, b, c);

// const universities = ['Makerere', 'Havard', 'NYU'];
// const [x, y, z] = universities;
// console.log(x, y, z);

// const ages = [20, 30, 71, 62];
// const [x, ...y] = ages;
// console.log(x, y);

//Destructuring assignment with objects ..........................................

// const wizard = {
//     magical: true,
//     power: 10
// }
// const {magical, power} = wizard;
// console.log(magical, power);

//Arrow functions ...........................................................................
// const scores = [30,90,78,65,72,15];
// const pass = () => {
//     scores.map(score => console.log(score +5));
// }
// pass();

// scores.filter((score) => {
//     return console.log ( score > 50);
// })

//Modules .........................................................................................

// import {students, total} from './students';
// import { add, multiply } from './calculator';
// console.log(students);
// console.log(total);

// console.log(add(20, 54));
// console.log(multiply(20, 10));

//CLASSES ...........................................................................................

import Person from './person';
class Teacher extends Person {
    constructor(name, country){
        super(name, country)
    }
    greet(){
        console.log(`Hi, I'm ${this.name} from ${this.country} and I'm a teacher `);
    }

}

const newTeacher = new Teacher('Frank', 'Uganda');
newTeacher.greet();