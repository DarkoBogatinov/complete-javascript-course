// Lecture
'use strict'

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); // Testing with strict equality
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log(`You have a friend called Steven`);
}

// Assignment

const neighbours = ['Serbia', 'Bulgaria', 'Greece', 'Albania'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log(`Probably not a central European country :D`);
}

neighbours[neighbours.indexOf('Serbia')] = 'Republic of Serbia';
console.log(neighbours);