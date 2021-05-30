// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the trophy!

1. Calculate the average score for each team, using the test data below.
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score,as well as multiple else-if blocks.
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal to 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123.
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.

GOOD LUCK
*/

let dolphinScore1 = 97;
let dolphinScore2 = 112;
let dolphinScore3 = 101;
let koalaScore1 = 109;
let koalaScore2 = 95;
let koalaScore3 = 106;
let dolphinAverage = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
let koalaAverage = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
    console.log("Dolphins won the trophy!");
} else if (dolphinAverage < koalaAverage && koalaAverage >= 100) {
    console.log("Koalas won the trophy!");
} else if (dolphinAverage === koalaAverage && dolphinAverage >= 100) {
    console.log("It is a draw!");
} else {
    console.log("No team has more than 100 points.");
}