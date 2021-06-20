'use strict';

// Lecture

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(jonas.calcAge());
console.log(jonas['calcAge']());

console.log(jonas.age);

// Challenge

// "Jonas is a 46-year old teacher, and he has a driver's license."

console.log(jonas.getSummary());

// Assignment

const myCountry = {
    country: 'Macedonia',
    capital: 'Skopje',
    language: 'macedonian',
    population: 2.1,
    neighbours: ['Serbia', 'Bulgaria', 'Greece', 'Albania'],

    // 1
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    // 2
    checkIsland: function () {
        this.neighbours.length ? this.isIsland = false : this.isIsland = true;
    }
};

// 2
myCountry.describe();
myCountry.checkIsland();