// 🔴 Date and time in javascript
// Creating Date Objects
// There are four ways to create new date object
// 1.new Date()
// 2.new Date(year,month,day,hours,minutes,seconds,milliseconds)
// // it take four arguments
// 3.new Date(milliseconds)
// // we can not avoid months section
// 4.new Date(date string)

// //✅ new Date()
// // Date objects are created with new date() constructor

// let currDate = new Date();
// console.log(currDate);
// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// // ✅ Date.now() returns the numeric value corresponding to the current the 
// // number of milliseconds elapsed since januray 1 1970
// console.log(Date.now());

// // How to get indivisual date
// const curDate = new Date();
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// // 🔴 Challenge time 🚩
// new Date().toLocaleTimeString(); //if only time required
// new Date().toLocaleDateString(); //if only date required
// new Date().toLocaleString(); //if time and date both required
