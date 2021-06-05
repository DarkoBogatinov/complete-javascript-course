// Lecture
'use strict';

function logger() {
    console.log(`My name is Jonas`);
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Assignment
function describeCountry(country, population, capitalCity) {
    const textToReturn = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return textToReturn;
}

const country1 = describeCountry('Macedonia', 2.1, 'Skopje');
const country2 = describeCountry('Norway', 5.3, 'Oslo');
const country3 = describeCountry('Denmark', 5.8, 'Copenhagen');

console.log(country1);
console.log(country2);
console.log(country3);