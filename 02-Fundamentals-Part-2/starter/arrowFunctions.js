// Lecture
'use strict';

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firtsName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firtsName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// Assignment
const percentageOfWorld3 = (population, country) => {
    const percentOfPopulation = (population / 7900) * 100;
    return `${country} has ${percentOfPopulation.toFixed(2)}% of the world population.`
}

console.log(percentageOfWorld3(2.1, 'Macedonia'));
console.log(percentageOfWorld3(83, 'Germany'));
console.log(percentageOfWorld3(5.3, 'Norway'));