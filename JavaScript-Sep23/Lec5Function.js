//Why function ?
// DRY- Do Not Repeat Yourself

// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);

//Now by using function
//defining function
// function sum(){
//     var a = 50,b = 20;
//     var total = a+b;
//     console.log(total);
// }

// // calling function
// sum();

//Diff bw function parameter and function arguments 
// function sum(a,b){ // a,b are Parameter
//     var total = a+b;
//     console.log(total);
// }
// sum(20,10); // arguments passed
// sum(30,90);
// sum(25,25);

// // Function Expression
// var funExp = sum(5,16);

// // Return keyword
// function sum(a,b);
// return total = a+b;
// var funExp = sum(5,25);
// console.log(funExp);

//Anonymous function
var funExp=function(a,b){
    return total = a+b;
}
var sum = funExp(15,15);
var sum1 = funExp(20,25);
console.log(sum > sum1);