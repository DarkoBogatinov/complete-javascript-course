// == vs. ===
const numNeighbours = prompt("How many neighbour countries does your country have?");
if (Number(numNeighbours) === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}

// 7. This is happening because numNeighbours is a string and we make a strict compare it to a number
// 8. We use type conversion so we can make a strict comparison between number and number