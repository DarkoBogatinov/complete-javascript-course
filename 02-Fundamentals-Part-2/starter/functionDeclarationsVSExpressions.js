// Lecture
'use strict';

const age1 = calcAge1(1991);

// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

//Assignment
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populationOfDenmarkPercentage = percentageOfWorld1(5.8);
const populationOfMacedoniaPercentage = percentageOfWorld1(2.1);
const populationOfGermanyPercentage = percentageOfWorld1(83);

console.log(`${populationOfDenmarkPercentage}%, ${populationOfMacedoniaPercentage}%, ${populationOfGermanyPercentage}%.`);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const populationOfDenmarkPercentage2 = percentageOfWorld2(5.8);
const populationOfMacedoniaPercentage2 = percentageOfWorld2(2.1);
const populationOfGermanyPercentage2 = percentageOfWorld2(83);

console.log(`${populationOfDenmarkPercentage2}%, ${populationOfMacedoniaPercentage2}%, ${populationOfGermanyPercentage2}%.`);
