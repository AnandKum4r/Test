//if else
// var tomr = 'rain';
// // var tomr = 'sunny';
// if(tomr == 'rain'){
//     console.log('take a raincoat');
// }
// else{
//     console.log('No need of raincoat');
// }

// //Leap Year Program
// var year = 2025;

// if (year % 4 == 0 ){
//     if(year % 100 == 0){
//         if(year % 400 == 0){
//             console.log('The Year '+year+' is a leap year');
//         }else{
//             console.log('The Year '+year+' is not a leap year');
//         }
//         console.log('The Year '+year+' is not a leap year');
//     }else{
//         console.log('The Year '+year+' is a leap year');
//     }
// }else{
//     console.log('The Year '+year+' is not a leap year');
// }

// //Falsy and Truthy value in js

// //We have total five falsy value in js
// // 0,"",undefined,null,NaN,false** is false anyway
// if(score = null){
//     console.log("Yay, We won the game");
// }else{
//     console.log("OMG, We loss the game");
// }

// //Conditional Operator
// var age = 19;
// if(age >= 18){
//     console.log('You are eligibal to vote');
// }
// else{
//     console.log("You are not eligibal to vote");
// }

// // Now in ternary operator
// var age = 14; 
// console.log((age >= 18) ? "You can vote":"You can not vote");

// //SWitch statment
// //area of circle triangle rectangle

// var area = 'circle';
// PI = 3.142, l=5,b=4,r=3;

// if(area == 'circle'){
//     console.log("The area of circle is: "+PI*r**2);
// }else if(area == 'triangle'){
//     console.log("The triangle of circle is: "+((l*b)/2));
// }else if(area == 'rectangle'){
//     console.log("The rectangle of circle is: "+(l*b));
// }else{
//     console.log("Please enter valid data");
// }

// //Now by using switch case
// var area = 'circle';
// PI = 3.142, l=5,b=4,r=3;

// switch(area){
//     case 'circle':
//         console.log("The area of circle is: "+PI*r**2);
//     case 'triangle':
//         console.log("The triangle of circle is: "+((l*b)/2));
//     case 'rectangle':
//         console.log("The rectangle of circle is: "+(l*b));
//     default:
//         console.log("Please enter valid data");
// }

// //while loop statement

// var num = 0;
// //block scope
// while(num <= 10 ){
//     console.log(num);
//     num++;
// }

// //Do While Loop
// var num = 20;
// //block scope
// do{
//     console.log(num);
//     num++;
// }while(num <= 10 );

// //For Loop
// for(num=0; num<=10; num++){
//     console.log(num);
// }

//Challenge time
//JS program to print table for given number(8)
for(var num=1; num<=10; num++){
    var tableOf = 8;
    console.log(tableOf + "*" + num + "=" + tableOf*num);
}