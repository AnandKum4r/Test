// ✅ FAT Aerrow function =>

// function sum(){
//     let a = 5; b = 16;
//     let sum = a+b;
//     return 'The sum of two number is : '+sum;
// }
// console.log(sum());


// // Now by using aerrow function
// const sum = () => {
//     let a = 5; b = 16;
//     let sum = a+b;
//     return `The sum of two number is ${sum}`;
// }
// console.log(sum());

// //1 another way
// const sum = () => {
//     let a = 5; b = 16;
//     return `The sum of two number is ${a+b}`;
// }
// console.log(sum());

// //2 another way 
// const sum = () => {
//     return `The sum of two number is ${(a=5)+(b=16)}`;
// }
// console.log(sum());

//3 another way do not need to write return in single line code
const sum = () => `The sum of two number is ${(a=5)+(b=16)}`;
console.log(sum());