// assignment Values and Variables
const country = "Macedonia";
const continent = "Europe";
let population = 2.1;

// console.log("Country: " + country);
// console.log("Continent: " + continent);
// console.log("Population: " + population + " milion");

// assignment Data Types
const isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// assignment let, const and var
const language = "Macedonian";
// language = "Makedonski";

// assignment Basic Operators
// console.log(population / 2);
// console.log(population++);
// console.log(population > 6);
// console.log(population < 33);
let description1 = country + " is in " + continent + ", and its " + population + " million people speak " + language;
// console.log(description1);

// assignment Strings and Template Literals
// console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}`);

// assignment Taking Decisions: if / else Statements
// population = 13;
// population = 130;
if (population >= 33) {
    console.log(`${country}'s populations is above average.`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average.`);
}