// comment
/*hello*/
// console.log("hello there");
// alert("print me");

// =========variables==========
// var let and const
// var name; creating variables
// var firstName = "Prem "; //assigning value
// let lastName = "Acharya";
// const dobp = "20-20-2020";

// console.log(firstName, lastName, dobp);
// firstName = "bikram";
// lastName = "adhikari";
// dobb = "20-20-2021";

// console.log(firstName, lastName, dobb);

// // js operator====
// // +	Addition
// const a = 6;
// const b = 4;
// const result = a + b;
// console.log(result);
// -	Subtraction
// const result = a - b;
// console.log(result);
// *	Multiplication
// const result = a * b;
// console.log(result);
// **	Exponentiation (ES2016)
// const result = a ** a;
// console.log(result);
// /	Division
// const result = a / b;
// console.log(result);
// %	Modulus (Division Remainder)
// const result = a % b;
// console.log(result);
// ++	Increment
// const result = a++;
// console.log(result);
// --	Decrement

// console.log(a--);
// a--;
// Comparisons
// ==
// ===
// >, >=
// <, <=
// p = 34;
// y = 78;
// console.log(p >= y);
// console.log(p <= y);
// console.log(p == y);
// console.log(p === y);
// Logical Operators
// &&
// ||
// !
// Ternary
// JS data type

/*
Primitives
String  		// “prem acharya”
const name='prem acharya';
Number 	//123
safe number -2^53-1 to 2^53-1
const name=34567;
Boolen		// true or false

Undefined	// not defined in system memory
const val=undefined;
Null  		// defined in system memory but no value 
assigned
const val=null;
console.log (typeof val, val)

*/
// let a = 5;
// console.log(a);
// const b = a;
// a = 10;
// console.log(a, b);

/*
/*Reference Types
Object 		//{key:”value”}
Array		//[“data”, 1232, {}, []]
Function 	// function()
Es6 	// const sayHi ()=> “hi”

*/
// const a={
//     firstName:"bikram"
//     lName:"adhikari"
// }
// console.log(a);
// const b = a;
// a.lName = "smith";
// console.log(a, b);
// const ans = {};

// console.log(ans);

//Math.PI;
// const ans = Math.PI;

/*
Math.round(4.7);   
const ans=Math.round(4.2); 
Math.pow(8, 2);  
Math.sqrt(64);  
Math.ceil(4.4); 
*/
// const ans = Math.round(4.2);
/*
Math.floor(4.7); 
Math.min(0, 150, 30, 20, -8, -200);
const 
Math.max(0, 150, 30, 20, -8, -200);   
Math.random();  
*/

// Math.max(0, 150, 30, 20, -8, -200);
// const ans = Math.max(0, 150, 30, 20, -8, -200);
// console.log(ans);

// conditionals statements//
// If//
//truthy: true, "anything" 1234, {},[],()=>{}
//falsey: false, "" , 0, null, undefined , NaN
// if (condition) {
//   //codes
// }
// let age = 20;
// if (age >= 18) {
//   console.log("welcome to party");
// } else {
//   console.log("go home kiddo");
// }
// const val = "vet";
// let age = 18;
// if (val == "vet" || age > 17) {
//   console.log("you are vampire");
// } else {
//   console.log("you are not");
// }

// If else//
// if one cond is wrong got to next cond
// Else if//
// const pet = "cow";
// if (pet === "cat") {
//   console.log("meow");
// } else if (pet === "dog") {
//   console.log("howwww");
// } else if (pet === "cow") {
//   console.log("mooooooooo");
// } else {
//   console.log("cawwwwww");
// }

// // Switch //
// const pet = "cow";
// switch (pet) {
//   case "cat":
//     console.log("meow");
//     break;

//   default:
//     console.log("bhooo");
// }

// Logical Operators
// &&----if first cond is true only runs the next cond
// ||---
// !---- checking oppsite
// console.log("!!!age, typeof !age");
// Ternary-----replaces else if conditon
// let age = 18;
// const val = "vets";
// age >= 18 ? console.log("welc to pt") : console.log("go home");

// error  handling
// try {
//   //code block

//   console.log("first");

//   throw new Error("hacked");
// } catch (error) {
//   console.log(error.message);
//   if (error.message === "hacked") {
//     console.log("email all the team memebers");
//   }
//   //catch error and handle
// } finally {
//   //run finally regardless
// }2

// js scheduling
// setTimeout(() => {
//   console.log("im from past");
//   3000; //3s
// });

// clearTimeout;
// // setInterval; (function , time in millisec)

// clearInterval;
// //settimeout;

// setTimeout(() => {
//     console.log("I am from settimeout");
//   }, 3000); //3s

// setInterval
// let i = 0;
// const counter = setInterval(() => {
//   console.log("it is " + i++);
//   if (i === 10) {
//     alert(counter);
//   }
//   clearInterval(counter);
//   console.log("it stopped");
// }, 1000); //2s
// // => clearInterval

//JS  ES 6//

// Let, Const

// const a = 5;
// const b = 7;
// console.log(a + b);
// // const str = "When we add" + a + "and" + b + "we get" + (a + b);

// const str = `whwn we add ${a} and ${b} the total would be ${a + b}`;
// console.log(str);
// Template literals
// Arrow function

// --- building the blocks:
// function add() {
//   console.log("add from the function");
// }
// console.log(add());
// const add = (a, b) => a + b;

// const ans = add(4235, 676);
// const ans2 = add(4235, 676);
// const ans3 = add(4235, 676);
// console.log(ans, ans2, ans3);
// Destructurinconstg

// Default + Rest + Spread

// looooppssssss
// for(i = 0; i < cars.length; i++)
// // for (initial, condition, increment/decrement){
// for (let i = 0; i < 10; ++i) {
//   console.log(i);
// }

// for/in for (x in person) → for object
// for /of for (x of cars) → for array
// while (condition)
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do/while | do{}while()
// do {
//   console.log(i);
//   i++;
// } while (i < 10);
// Break out of loop
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
//   if (i == 8) {
//     break;
//   }
// }

// Continue, in loop to exit 1 loop
// let i = 0;
// while (i < 10) {
//   i++;
//   if (i % 2 === 0) {
//     console.log(i);
//     continue;
//   }
// }

// Break, break out the loop or switch

// JS DATA Manipulation
// #number

// safe number -2^53-1 to 2^53-1
//downcasting
// const num = "45612345";
// const val = +num;
// const val = Number(num);
// const num = "4561.2345s";
// // const val = parseInt(num);
// const val = parseFloat(num);

// console.log(typeof val, isNaN(val));

// String
// const str = "hi i'm Jake Jolly";
// const str = "hi i\'m Jake Jolly";
// const str = "    hi i'm Jake Jolly and i live in townsville";
// const val = str.toUpperCase();
// const val = str[20];
// const val = str.indexOf("e");
// const val = str.lastIndexOf("e");
// const val = str.indexOf("and");
// const val = str.replaceAll("i", "e");

// both the counter from the zero position
// const val = str.substring(6, 18);
// const val = str.slice(9, 18);

// const val = str.includes("Jake");
// const val = str.search("live");

// const val = str.charAt("9");

// const val = str.charCodeAt(8);
// const val = str.split(",");

// const val = str.trim();

// console.log(str.length, val.length);

// Escape character
// Length
// indexOf, lastIndexOf, search
// Slice, substring, substr
// Replace, contact, trim
// toUpperCase, toLowerCase
// charAt, [], split

// ######----ARRAYYYYYYYY----#######

// const vale = ["nc", 678, true, null, undefined, NaN, [123, 123], {}];
// const fruits = ["banana", "apple", "orange", "cherry", "1200", "9"];
// fruits.push("mango");
// fruits.unshift("mango");
// const dt = fruits.shift();
// const dt = fruits.slice(1, 0, "dragon");
// console.log(dt);
// console.log(fruits.sort());
// console.log(fruits.reverse());
// const numbs = [41, 92, 3, 74, 52, 63, 76, 18];
// console.log(numbs.sort((a, b) => a - b));
// console.log(fruits.toString());

// const data = fruits.join(" | ");
// console.log(data);

// fruits.forEach((itm, i) => {
//   console.log(itm + " is yummy", i);
// });
// map() vs forEach()------------
// The map() method returns a new array, whereas the forEach() method does not return a new array. The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.

// const fruits = [
//   "banana",
//   "apple",
//   "orange",
//   "cherry",
//   "Pear",
//   "Berry",
//   "mango",
// ];
// const newArg = fruits.map((items, index) => {
//   console.log(items, index);
// //   return "SKU-" + items.toUpperCase();
// });
// const newArg = fruits.filter((fr) => {
//   return !fr.includes("e");
// });
// const result = fruits.every((item) => {
//   return item.includes("an");
// });
// const money = [1, 2, 3, 4, 6];
// const total = money.reduce((subTtl, items) => {
//   return subTtl + items;
// }, 10);
// console.log(total);

// const arg = Array(100).fill("❣️");

// console.log(arg);

// challange #1
// 1. create an array of 50 random numbers between range between 1 and 100 programmatically.

// #sort the arry in descending order
// get total of the array
// 4.divide original array in to 2 new array that contains ever or odd number only each.

// # remove duplicate number for the original array.

// // Step 1: Create an array of 50 random numbers between 1 and 100
// //The first step is to create an empty array called randomNumberArray. A loop then iterates 50 times. During each iteration, a random number between 1 and 100 is generated using Math.random() (which produces a number between 0 and 1) and then scaled to fit the range of 1 to 100 using multiplication and addition. This random number is then added to the randomNumberArray.
// const randomNumberArray = [];
// for (let i = 0; i < 50; i++) {
//   const randomNumber = Math.floor(Math.random() * 100 + 1);
//   randomNumberArray.push(randomNumber);
// }

// // Step 2: Sort the array in descending order
// //The sort() method is used to sort the randomNumberArray in descending order. The comparison function (a, b) => b - a ensures that the elements are compared and swapped based on their values in descending order.
// randomNumberArray.sort((a, b) => b - a);

// // Step 3: Get the total of the array
// //The reduce() method is applied to the randomNumberArray to calculate the total sum of all the numbers in the array. The initial value of the sum is set to 0, and for each element in the array, the element's value is added to the sum.
// const total = randomNumberArray.reduce((sum, num) => sum + num, 0);

// // Step 4: Divide the original array into two new arrays containing even and odd numbers
// //The filter() method is used twice. First, it creates a new array evenArray by filtering only the even numbers from randomNumberArray using the condition num % 2 === 0. Second, it creates a new array oddArray by filtering only the odd numbers using the condition num % 2 !== 0.
// const evenArray = randomNumberArray.filter((num) => num % 2 === 0);
// const oddArray = randomNumberArray.filter((num) => num % 2 !== 0);

// // Step 5: Remove duplicate numbers from the original array
// //To remove duplicates from the original randomNumberArray, the Set data structure is utilized. A Set stores only unique values, so by spreading the randomNumberArray into a new Set and then spreading it back into an array, duplicates are automatically removed.
// const uniqueArray = [new Set(randomNumberArray)];

// // Display the results
// console.log("Random Number Array:", randomNumberArray);
// console.log("Total:", total);
// console.log("Even Array:", evenArray);
// console.log("Odd Array:", oddArray);
// console.log("Unique Array:", uniqueArray);
// Fun challange
// debugger;
// const yoyo = () => console.log(5 + 6);
// console.log("1. log");
// setTimeout(() => {
//   console.log("2. inside frist set timeout");
// }, 500);
// console.log("3. after first setTime out");
// const sayHey = () => {
//   console.log("4. inside sayhey");
//   yoyo();
// };
// setTimeout(() => {
//   console.log("5. inside second set timeout");
// }, 0);
// sayHey();
// console.log("6. last clg");
// //

// 1. `const yoyo = () => console.log(5 + 6);`
//    - This line defines a constant `yoyo` which is a function that logs the result of the expression `5 + 6` to the console, which is 11.

// 2. `console.log("1. log");`
//    - This line logs the string "1. log" to the console.

// 3. `setTimeout(() => { console.log("2. inside first set timeout"); }, 500);`
//    - This line sets up a timer using `setTimeout` function. It will execute the provided function (logging "2. inside first set timeout") after 500 milliseconds (0.5 seconds).

// 4. `console.log("3. after first setTime out");`
//    - This line logs the string "3. after first setTime out" to the console.

// 5. `const sayHey = () => { console.log("4. inside sayhey"); yoyo(); };`
//    - This line defines a constant `sayHey` which is a function. When called, it logs "4. inside sayhey" and then calls the `yoyo` function, which logs the result of `5 + 6`, which is 11.

// 6. `setTimeout(() => { console.log("5. inside second set timeout"); }, 0);`
//    - This line sets up another timer using `setTimeout`, but this time with a delay of 0 milliseconds. Despite the delay being 0, the function inside the timeout will be put in the event queue and executed after the current call stack is cleared. This is why it appears to "wait" until the other synchronous code is executed.

// 7. `sayHey();`
//    - This line calls the `sayHey` function, which logs "4. inside sayhey" and then calls the `yoyo` function, which logs 11 to the console.

// 8. `console.log("6. last clg");`
// //    - This line logs the string "6. last clg" to the console.

// // Now, let's summarize the order of execution:

// // - "1. log" is logged.
// // - The first `setTimeout` is set to execute its function after 500 milliseconds.
// // - "3. after first setTime out" is logged.
// // - "4. inside sayhey" is logged.
// // - "5 + 6" (which is 11) is logged.
// // - The second `setTimeout` is set to execute its function after a very short delay (virtually 0 milliseconds).
// // - "6. last clg" is logged.
// // - The event loop picks up the function from the second `setTimeout` and logs "5. inside second set timeout".

// // Keep in mind that even though the second `setTimeout` is set with a delay of 0 milliseconds, it will still wait for the current call stack to clear before executing, which is why it appears after "6. last clg".

// // Create unique array 50 range between 1 and 100 programatically.

// // ------------
// // console.time("args");
// // const array = [];
// // let counter = 0; //making empty array function
// // while (array.length < 50) {
// //   // that takes the number length upto 50
// //   const num = Math.floor(Math.random() * 100) + 1; // range between 1 to 100. Counts starts from 0 to 99.9> to amke it 100 +1. Math.floor make the around number.
// //   if (array.indexOf(num) === -1) {
// //     //it returns the first index (i) at given elements of the array if -1 is not given.
// //     array.push(num); // is used to add new specific element at the new length of array.
// //   }
// //   counter++;
// // }
// // console.log(array);
// // console.log(counter);
// // console.timeEnd("args");
// // //printing the result.
// // -------------

// // OBJECTS {}

// // const person = {
// //   name: "Bikram Adhikari",
// //   number: "223344556",
// //   add: "sydney",
// //   student: true,
// //   skills: ["JS", "REACT", "node"],
// //   parents: {
// //     f: "Ram",
// //     M: "Sita",
// //   },
// // };
// // destructuring
// // //default + reset +spread
// // console.log(person);
// // const {name, add="n/a" } = person;
// // console.log(person.name, name, add);

// const bio=({name,add ="na")=> {
//   const str =`hi there my name is ${name} and i live in ${add}`;

//   return str;
// };
// const bik={
//   name="bikram",
//   add="sydney",

// };
// const data= bio(bik)
// console.log(data)

// const nik{
//   name='nike'
// };

// const nikedata=bio(nik);
// console.log(nikedata)

// console.log(person.name);
// console.log(person.parents.f);
// console.log(person.skills[2]);

// person.gender = "NA";
// console.log(person);
// delete person.parents;

// console.log(person);
// for (let key in person) {
//   console.log(key, person[key]);
// }

// const p = Object.keys(person);

// console.log(p);

// const p = Object.entries(person);
// console.log(p);

//default +rest +spread

// const p = {
//   name: "bikram",
//   add: "sydney",
// };

// const career = {
//   education: "BNET",
//   year: 2023,
// };

// // const bikObj = Object.assign({}, p, career);
// // (p.name = "harry"),

// const bikObj = {
// //   ...p,
// //   ...career,
// // };

// // const { name, ...rest } = bikObj;

// // console.log(bikObj, name, rest);

// // ---Date-----

// // ====
// // const today = Date();
// // const today = Date.now();

// // const today = new Date();
// // const today = new Date("2020-9-20");

// // const data = today.toLocaleDateString();
// // const data = today.getDay();
// // const data = today.getMonth();
// // const data = today.getFullYear();

// // today.setDate(today.getDate() + 5);
// // console.log(data);

// // ==========Create a function that takes foods name and the expiry date and returns one of the following:
// // if expired: AB is expired 4 days ago.
// // iof not expired: you have 10 days to use this food.

// // create couple food object with name and expiry date
// // create one function which checks the data return message like above.

// const foods = [
//   {
//     fname: "tuna",
//     expiryDate: "2023-10-15",
//   },
//   {
//     fname: "rusk",
//     expiryDate: "2023-9-15",
//   },
// ];

// function checkDate(food)
// const currentDate = Date.now()

// const expiryDate = foods.map((food)=>{

// })

// const timeleft = expiryDate - currentDate;
// const daysleft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// if (daysleft < 0) {
//   console.log("Food is expired 4 days ago");
// } else {
//   console.log("you have 10 days to use this food");
// }

function checkExpiry(foodName, expiryDate) {
  const currentDate = new Date();
  expiryDate = new Date(expiryDate);

  const timeDifference = expiryDate - currentDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference < 0) {
    return `${foodName} is expired ${Math.abs(daysDifference)} days ago.`;
  } else {
    return `You have ${daysDifference} days to use this ${foodName}.`;
  }
}

// Example usage
const food1 = "AB";
const expiryDate1 = "2023-08-20"; // Example expiry date (in YYYY-MM-DD format)
console.log(checkExpiry(food1, expiryDate1));

const food2 = "CD";
const expiryDate2 = "2023-09-10"; // Example expiry date (in YYYY-MM-DD format)
console.log(checkExpiry(food2, expiryDate2));

// the Javascript map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally, the map() method is used to iterate over an array and call function on every element of the array.

// another challenge
// Covering numbers
// An n-digit number is considered a covering number. If it makes use of all the digits 1 to n exactly once, where n Is the number of nonzero digits. For example, 2143 and 103245 are both "covering numbers, whille 20010043 and 113245 are not.
// Write a function that takes a single Integer, and returns a value according to the following rules:
// •If the number Is a 'covering number", return the number of zeroes as a positive Integer, For example, 2143 would produce a result of 0, while 103245 would produce a result of 1.
// • If the number Is not a 'covering number", retum 1. +

function covering_num(num) {
  const str = num.toString();
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char == "0") {
      counter++;
    }

    if (char !== "0" && str.indexOf(char) !== i) {
      return -1;
    }
  }

  return counter;
}

console.log(covering_num(3405635));
