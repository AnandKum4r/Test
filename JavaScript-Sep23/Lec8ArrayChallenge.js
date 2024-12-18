// // 🔴 challenge time
// const months = ['Jan','March','April','June','July'];
// // 1. add Dec to end of the array
// console.log(months);
// months.push('Dec'); //push() used to add
// console.log(months);

// // 🔴 splice() method add/remove elements from array
// const months = ['Jan','March','April','June','July'];
// const newMonths = months.splice(months.length,0,"Dec");
// console.log(months);

// // 2. what is return value of splice method
// console.log(newMonths);

// // 3. Update March to May
// // const updateMonths = months.splice(1,1,"May");
// // console.log(months);

// // Or this method
// const indexOfMonths = months.indexOf('March');
// if(indexOfMonths != -1){
//     const updateMonths = months.splice(indexOfMonths,1,"May");
//     console.log(months);
// }else{
//     console.log("No such data found");
// }

// // ✅ 4. Delete June from array
// const months = ['Jan','March','April','June','July'];
// const indexOfMonths = months.indexOf('June');
// if(indexOfMonths != -1){
//     const updateMonths = months.splice(indexOfMonths,1);
//     console.log(months);
// }else{
//     console.log("No such data found");
// }


// // 🔴 Array Section 4 Map() Reduce() Filter() method in js
// // map() method return a new array containing the result of calling a
// // function on every element in this array

// const array1 = [1,4,9,3,10,0,15,19,2];
// let newArr = array1.map((curElm,index,arr) => {
//     return curElm > 9;
// })
// console.log(array1);
// console.log(newArr);

// const array1 = [1,4,9,3,10,0,15,19,2];
// let newArr = array1.map((curElm,index,arr) => {
//     return `Index no = ${index} and the value is ${curElm} blong to ${arr}`
// })
// console.log(newArr);
// // it return new array without mutating the original array

// // ✅ Difference btw forEach() and map() method
// // forEach() method return undefined value but map() return new array with transformed value
// let newArr1 = array1.forEach((curElm,index,arr) => {
//     return `Index no = ${index} and the value is ${curElm} blong to ${arr}`
// })
// console.log(newArr1);

// // ✅ Q1 find the square root of each element in array 
// let arr = [25,36,49,64,81];
// let arrSqr = arr.map((curElem) => {
//     return Math.sqrt(curElem); // math.sqrt is a method
// })
// console.log(arrSqr);

// // or this way in one line
// let arr = [25,36,49,64,81];
// let arrSqr = arr.map((curElem) => Math.sqrt(curElem));
// console.log(arrSqr);

// // ✅ Q2 multiply each element and return only those element which are greater than 10
// let arr = [2,3,4,15,6];
// let arr2 = arr.map((curElem) => {
//     return curElem*2;
// }).filter((curElem) => {
//     return curElem > 10;
// })
// console.log(arr2);

// // or this way in one line
// let arr = [2,3,15,6];
// let arr2 = arr.map((curElem) => curElem*2).filter((curElem) => curElem>10);
// console.log(arr2); 

// ✅ Reduce Method
// flatten of array means convert the 3D and 2D array into a single dimensional array
// Reducer function takes four arguments given below
// 1. Accumulator
// 2. Current value
// 3. Current Index
// 4. Source Array

// let arr = [5,8,9];
// let sum = arr.reduce((accumulator, curElem, index, arr) => {
//     return accumulator *= curElem;
//     //return accumulator += curElem;
// })
// console.log(sum);

// let arr = [4,15,11];
// let arr2 = arr.map((curElem) => curElem*2).filter((curElem) => curElem>10).reduce((accumulator, curElem) => {
//     return accumulator *= curElem;
// });
// console.log(arr2); 

// How to fatten and array.Converting 2D 3D array into 1D array
const arr = [
    ['zone1','zone2'],
    ['zone3','zone4'],
    ['zone5','zone6'],
    ['zone7','zone8']
];
let flatArr = arr.reduce((accum,currVal) => {
    return accum.concat(currVal);
}) 
console.log(flatArr);
