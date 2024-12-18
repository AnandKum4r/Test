// 🔴 Section 7 Strings in JavaScript
// A js is zero or more character written inside quotes
// JavaScript strings are used for storing and manipulating text
// you can use single or double quotes
// Strings can be primitives
// from string literals or as objects using the String() constructor

// let myName = "Anand Kumar";
// let myChhanelName = "Geeky Anand";
// //let ytName = new String("Anand Arya"); // this
// let ytName = "Anand Arya" // or this
// console.log(myName);
// console.log(myChhanelName);
// console.log(ytName);

// // ✅ How to find length of the strings
// console.log(myName.length);

// // ✅ Escape Character 
// // It is used when need "" in any senetence
// let anySenetence1 = "I am student of \"MMMUT\" from Btech in IT";
// console.log(anySenetence1);
// let anySenetence2 = "I am student of 'MMMUT' from Btech in IT";
// console.log(anySenetence2);
// let anySenetence3 = 'I am student of \'MMMUT\' from Btech in IT';
// console.log(anySenetence3);
// let anySenetence4 = 'I am student of "MMMUT" from Btech in IT'; 
// console.log(anySenetence4);
// // All above four shows that we can use single quotes with double qutoes 
// // without using escape vice versa

// // ✅ finding string in a string
// // The indexOf() method returns the index of (the position of) the first
// // occurance of a specific text in a string
// const bioData = "I am Anand Kumar";
// console.log(bioData.indexOf('Ad')); // indexOf() return -1 if not found string
// console.log(bioData.indexOf('anand')); // it will return -1 becoz case senstive
// console.log(bioData.indexOf('Anand'));
// console.log(bioData.indexOf('r')); //indexing start from 0

// //✅ lastIndexOf() method search backward from last value will return -1 if not found
// console.log(bioData.lastIndexOf('r'));
// console.log(bioData.lastIndexOf('Anand'));

// // ✅ Searching a string in a string
// // the search method() search a string from specific
// // value and return the position of the match

// const bioData = "I am Anand Kumar";
// let searchData = bioData.search("Anand");
// console.log(searchData);

// 🔴 Extracting String Parts
// There are three method for extracting the part of a string
// 1. slice(start,end)
// 2. substring(start,end)
// 3. substr(start,length)

// // ✅ The Slice() method extract a part of string and return extracted part
// // this method take two parameter : start postion and end position
// var str = "Apple,Banana,Kiwi,Mango";
// let res = str.slice(1,4);
// let res1 = str.slice(6,-2);
// console.log(res);
// console.log(res1);
// // slice method select the element starting at given start arguments and ends at but
// // does not include the given end argument (end char ko ignore krta hai)

// // 🔴 Challenge time 🚩
// // Q: Display only 280 characters of a string like one used in twitter
// let myTweet = "If you do not have one, create a new Gmail id or use an existing one and then login into blue stacks using that email . Once logged in successfully, search for the Google lens app which is available on the play store inside the BlueStacks emulator. Click it and download it just like any other app.";
// let myActualTweet = myTweet.slice(0,280);
// console.log(myTweet.length);
// console.log(myActualTweet); // will print only 280 character
// console.log(myActualTweet.length);

// // ✅  the substring() method is similar to slice but it cannot accept negative index
// var str = "Apple,Banana,Kiwi,Mango";
// let res = str.substring(2,10);
// let res1 = str.substring(9,-2); // will not accept negative value will cpunt from 0 
// console.log(res);
// console.log(res1);

// // ✅  substr() method is similar to slice but its second parameter specifies
// // the length of the extracted part
// var str = "Apple,Banana,Kiwi,Mango";
// let res = str.substr(0,4);
// let res1 = str.substr(-4);
// console.log(res);
// console.log(res1);

// // 🔴 Replacing String content
// // replace method replace a specified value with another value in a string
// // it is case senstive
// let bioData = "I am Anand Kumar Arya Anand";
// let replaceData = bioData.replace('Anand','Abhishek'); //replace only first match
// console.log(replaceData);

// 🔴 Extracting string content
// there are three method
// 1.charAt(position)
// 2.charCodeAt(position)
// 3.Property Access[]

// // ✅ charAt() method returns the character at specific index(position) in string
// let str = "Hello Anand ";
// console.log(str.charAt(6));

// // ✅ charCodeAt() method returns the unicode of the character at a spcecifc index in string
// var str1 = "Hello Anand ";
// console.log(str.charCodeAt(6)); 

// // ✅ Q1.Return the unicode of the last character in a string
// let str3 = "Anand Kumar";
// let lastChar = str3.length-1 //-1 becoz indexing start with 0
// console.log(str3.charCodeAt(lastChar));

// // ✅ Others useful method
// let myName = "Anand Arya";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// // ✅ Concat() method join two or more string
// let fName = "Anand";
// let lName = "Kumar";
// console.log(fName+lName);
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName)); //✅ 
// console.log(fName.concat("",lName));

// // ✅ trim() method remove whitespace from both side of string
// var str = "   Hello Anand    ";
// console.log(str);
// console.log(str.trim());

// ✅ Converting a string to an array
// a string can be converted to array by using split() method
var txt = "a,b,c ,d,|e"; //string
console.log(txt.split("  "));   // split on space
console.log(txt.split(","));   // split on commas(jaha pr commas h waha split) 
console.log(txt.split("|"));   // split on pipe
