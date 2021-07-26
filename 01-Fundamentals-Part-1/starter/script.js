/*
// LINKING A JAVASCRIPT FILE
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Luana");
console.log(23);

let firstName = "Fredy";

// Variables name conventions
console.log(firstName);

let jonas_matilda = 'JM';
let $function = 27;

let person = 'luana';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
*/


/*
// VALUES AND VARIABLES
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Luana');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/


/*
//DATA TYPES
let age = 30;
age = 31;

const birthYear = 1992;
//birthYear = 1990;

//const job;

var job = 'programer';
job = 'teacher';

lastName = 'Lima';
console.log(lastName);
*/


//BASIC OPERATORS
// MAth operators 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018; 
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 2);
// 2 ** 3 means 2 to the power 3 = 2 * 2 * 2

const firstName = 'Luana';
const lastName = 'Lima';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x= x + 10 = 25 
x *= 4; // x = x * 4 = 100
x++; 
x--;
console.log(x);

//Comparison operators 
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now -1991 > now - 2018);