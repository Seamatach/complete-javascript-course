/* Variables and Operators
*
*CODING CHALLENGE 1 
*
*
*
*/
/*
Mark and John are trying to compare their BMI, which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). Mass in KG and Height in Meters.

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI Higher than John's? true").

*/

var mMass = 20;
var mHeight = 1.8;
var jMass = 22;
var jHeight = 1.6;
var boolMJ;

var mBMI = mMass / (mHeight * mHeight);
var jBMI = jMass / (jHeight * jHeight);

var boolMJ = mBMI > jBMI;
var conBoolMJ
console.log('Mark\'s BMI is ' + mBMI);
console.log('John\'s BMI is ' + jBMI);
console.log('Is Mark\'s BMI Higher than John\'s? ' + boolMJ);

/* Using a conditional statement */
if (mBMI > jBMI){
    conBoolMJ = true;
}
else {
    conBoolMJ = false;
}

console.log('Mark\'s BMI is ' + mBMI);
console.log('John\'s BMI is ' + jBMI);
console.log('Is Mark\'s BMI Higher than John\'s? ' + conBoolMJ);

/*****************************
 * Conditionals
 * 
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

var jGameOne = 89;
var jGameTwo = 120;
var jGameThree = 103;
var jGameAvg = (jGameOne + jGameTwo + jGameThree) / 3;

var miGameOne = 116;
var miGameTwo = 94;
var miGameThree = 123;

var miGameAvg = (miGameOne + miGameTwo + miGameThree) / 3;

var maGameOne = 97;
var maGameTwo = 134;
var maGameThree = 105;

var maGameAvg = (maGameOne + maGameTwo + maGameThree) / 3;

console.log('John\'s game average is ' + jGameAvg);
console.log('Mike\'s game average is ' + miGameAvg);
console.log('Mary\'s game average is ' + maGameAvg);

if (jGameAvg > miGameAvg && jGameAvg > maGameAvg){
    console.log('John has the highest game average of ' + jGameAvg + '.');
}
else if (miGameAvg > jGameAvg && miGameAvg > maGameAvg){
    console.log('Mike has the highest game average of ' + miGameAvg + '.');
}
else if (maGameAvg > jGameAvg && maGameAvg > miGameAvg){
    console.log('Mary has the highest game average of ' + maGameAvg + '.');
}
else if (miGameAvg > jGameAvg && miGameAvg === maGameAvg){
    console.log('Mike and Mary have the highest game average of ' + miGameAvg + '.');
}
else if (maGameAvg > miGameAvg && maGameAvg === jGameAvg){
    console.log('John and Mary have the highest game average of ' + maGameAvg + '.');
}
else if (miGameAvg > maGameAvg && miGameAvg === jGameAvg){
    console.log('John and Mike have the highest game average of ' + jGameAvg + '.');
}
else {
    console.log('John, Mike, and Mary all have the same game average of ' + miGameAvg + '.');
};

/*****************************
 * Arrays, Functions
 * 
 * 
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

function tipCalculator(bill){
 var percentage;

 if (bill < 50){
     percentage = .2;
 }
 else if (bill > 50 && bill < 200){
     percentage = .15;
 }
 else {
     percentage = .1;
 }
return bill * percentage;
};

var bills = [124, 48, 268];
var tips = new Array(3);
var total = new Array(3);

tips[0] = tipCalculator(bills[0]);
tips[1] = tipCalculator(bills[1]);
tips[2] = tipCalculator(bills[2]);

total[0] = bills[0] + tips[0];
total[1] = bills[1] + tips[1];
total[2] = bills[2] + tips[2];

console.log(bills);
console.log(tips);
console.log(total);