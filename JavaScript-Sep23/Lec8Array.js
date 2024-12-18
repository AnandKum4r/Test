// ✅ Array in javascript
// when we use var we can store only one value at a time but when
// we use array we can use multiple values of different types
// Array indexing always start with 0


// // ✅ Array Section 1 Traversal in array
// // if we want to get/change single data at a time then 
//  var myFriends = ['Anand','Huzaifa','Prateek','Anurag','Nikhil','Abhishek'];
//  console.log(myFriends[2]); //find any element by its index
//  console.log(myFriends.length); // to check length of the array
//  console.log(myFriends[myFriends.length-1]); // to get last element

//  // we use for loop in array to navigate
//  var myFriends = ['Anand','Huzaifa','Prateek','Anurag','Nikhil','Abhishek'];
//  for(var i=0; i<myFriends.length; i++){
//     console.log(myFriends[i]);
//  }

//  // ✅ After ES6 we have for..in and for..of loop in js
//  var myFriends = ['Anand','Huzaifa','Prateek','Anurag','Nikhil','Abhishek'];
//  //for..in loop
//  for(let elements in myFriends ){
//     console.log(elements);
//  } 
//  //for..of loop
//  for(let elements of myFriends ){
//     console.log(elements);
//  } 


// //✅ forEach() loop
// // Calls a function for each elements in array
// var myFriends = ['Anand','Huzaifa','Prateek','Anurag','Nikhil','Abhishek'];
// myFriends.forEach(function(element,index,array){
//     console.log(element + " at index " + index +" from array of " + array);
// })
// // ot this way
// var myFriends = ['Anand','Huzaifa','Prateek','Anurag','Nikhil','Abhishek'];
// myFriends.forEach((element,index,array)=>{
//     console.log(element + " at index " + index +" from array of " + array);
// })
 

// ✅ Searching and Filter in array by indexOf() 


// ✅ Array CRUD operation(Insert,Add,Replace,Delete)
// ✅1st push() method add one or more element to the
// end of array and return the new length of the array
// const animals = ['cow','goat','sheep'];
// // const count = animals.push('Naagin');
// // console.log(count);
// animals.push('chicken','cats','lion');
// console.log(animals);

//✅ 2nd unshift() method add one or more elements to the
// beginning of the array and return the lenght of the array
// const animals = ['cow','goat','sheep'];
// animals.unshift('chicken','cats','lion');
// console.log(animals);

// // 2nd Example
// const myNumbers=[1,2,3,5,7];
// myNumbers.unshift(4,6);
// console.log(myNumbers);

// // ✅ pop() method remove the last elements from the array and return
// // that removed element. this method change the lenght of the array
// const plants = ["broccoli","tomato","cabage","cauliflower"];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// ✅ shift() method remove the first elements from array and return the
// removed element. this method change the lenght of the array
const plants = ["broccoli","tomato","cabage","cauliflower"];
console.log(plants);
console.log(plants.shift());
console.log(plants);