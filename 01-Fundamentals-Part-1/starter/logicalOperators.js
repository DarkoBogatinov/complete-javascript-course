const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

// Assignment

const languageSpoken = 'English';
const maximumPopulation = 50;
const toBeAnIsland = false;
const myCountryLanguage = 'Macedonian';
const myCountryPopulation = 2;
const myCountryIsAnIsland = false;

if (languageSpoken === myCountryLanguage && myCountryPopulation < maximumPopulation && myCountryIsAnIsland === toBeAnIsland) {
    console.log("You should live in Macedonia :)");
} else {
    console.log("Macedonia does not meet your criteria :(");
}