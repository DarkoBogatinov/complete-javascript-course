/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programer";
let job2 = "teacher";

console.log(myFirstJob);
*/

/*
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

/*
// Let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";
*/

/*
// Basic Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

const firstName = "Darko";
const lastName = "Bogatinov";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // x = x + 10;
x *= 4; // x = x * 4;
x++; // x = x + 1;
x--; // x = x - 1;
x /= 2; // x = x / 2;
console.log(x);

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
*/

/*
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// Coding challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables;
2. Calculate both their BMIs using the formula (you can even impliment both versions);
3. Create a boolean variable 'markHigherBMI' containing information about wheter Mark has a higher BMI than John;

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

// TEST DATA 1
//1
let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;
// 2
let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;
// 3
let markHigherBMI = bmiMark > bmiJohn;

console.log("Marks BMI " + bmiMark);
console.log("Johns BMI " + bmiJohn);
console.log("Is Marks BMI higher than Johns: " + markHigherBMI);

// TEST DATA 2
// 1
massMark = 95;
massJohn = 85;
heightMark = 1.88;
heightJohn = 1.76;
// 2
bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / heightJohn ** 2;
// 3
markHigherBMI = bmiMark > bmiJohn;

console.log("Marks BMI " + bmiMark);
console.log("Johns BMI " + bmiJohn);
console.log("Is Marks BMI higher than Johns: " + markHigherBMI);