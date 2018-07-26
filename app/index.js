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
  