// Lecture
'use strict';

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

// Assignment
function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population).toFixed(1)}% of the world.`
}

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

console.log(describePopulation('Macedonia', 2.1));
console.log(describePopulation('Germany', 83));
console.log(describePopulation('Norway', 5.3));