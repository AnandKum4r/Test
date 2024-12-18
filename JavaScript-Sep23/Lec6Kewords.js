//🔖Word vs Keyword  
// ✅Word => Anything which has no meaning like Anand etc
// ✅Keyword => Anything which has meaning like for while etc

//🔖VAR CONST LET
// Variable and Constant
// ✅Variable => Code me koi bhi data store karne ke liye use hota hai

//✅LET vs CONST vs VAR 

// var myName = "Anand Kumar"; //Using Var 
// console.log(myName);
// myName = "Anand Arya";
// console.log(myName);

// let myName = "Anand Kumar"; //Using Let
// console.log(myName);
// myName = "Anand Arya";
// console.log(myName);

// const myName = "Anand Kumar"; //Using Const
// console.log(myName);
// myName = "Anand Arya";
// console.log(myName);

// function biodata(){
//     var myFirstName = "Anand"; //Using var 
//     console.log(myFirstName);
//     if(true){
//         var myLastName = "Kumar";
//         console.log("Inner " + myFirstName);
//         console.log("Inner " + myLastName);
//     }
//     console.log("Inner Outer " +myFirstName, myLastName);
// }
// biodata();

// ✅ VAR => Function Scope
// ✅ LET and CONST => Block Scope

// function biodata(){
//     const myFirstName = "Anand"; //Using let or const will get error becoz they can used only in block of the code
//     console.log(myFirstName);
//     if(true){
//         const myLastName = "Kumar";
//         console.log("Inner " + myFirstName);
//         console.log("Inner " + myLastName);
//     }
//     console.log('Inner Outer' + myLastName);
// }
// biodata();

// ✅ Template literals(template strings)
// js program to print table of given num(8)

// for(let num = 1; num <= 10; num++){
//     let tableOf = 15;
//     //console.log(tableOf + " * " + num + " = " + tableOf*num ); //this
//     console.log(`${tableOf} * ${num} = ${tableOf*num}`); //or this 
// }

// ✅ Default Parameter
// => Default parameter allow named parameter to be initialized with 
// => deafult value if no value or undefined is passed

function mult(a,b=5){
    return a*b;
}
console.log(mult(10));