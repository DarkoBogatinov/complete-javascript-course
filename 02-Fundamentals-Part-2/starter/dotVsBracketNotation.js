'use strict';

// Lecture

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'first' + nameKey);

const interestedIn = prompt(`What do you want to know about jonas? Choose between firstName, lastName, age, job, and friends`);

console.log(interestedIn);
// console.log(jonas.interestedIn);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(`Wrong request!`);
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';

console.log(jonas);

// Challenge

// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// Assignment

const myCountry = {
    country: 'Macedonia',
    capital: 'Skopje',
    language: 'macedonian',
    population: 2.1,
    neighbours: ['Serbia', 'Bulgaria', 'Greece', 'Albania']
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] = myCountry['population'] - 2;
console.log(myCountry['population']);