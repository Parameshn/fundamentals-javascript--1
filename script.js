/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('jonas')
console.log(123);

let firstName = "jones"
console.log(firstName)



let javaScriptIsFun = true;
console.log(javaScriptIsFun)
//console.log(typeof true);
console.log(typeof javaScriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'jonas');

javaScriptIsFun = 'Yes!'
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;
const birthyear = 1990;
//birthyear = 1991;


var job = 'programmer'
job = 'teacher'

lastName = 'Schdmedtmann';
console.log(lastName); */

//Mathematical operators
/*const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;
console.log(ageJones, ageSarah);

console.log(ageJones * 2, ageJones / 10, 2 ** 3);
//2**3 means2 to the power of 3 = 2 * 2 * 2
const firstName = 'jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++;// x = x + 1
x--;
x--;
console.log(x);

//comparision operators
console.log(ageJones > ageSarah); // < , > <= ,>=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 , x = 10
console.log(x, y);

const averageAge = (ageJones + ageSarah) / 2
console.log(ageJones, ageSarah, averageAge);


Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK � */

/*let marksHeight = 1.69;
let marksMass = 78;
const BMIMark = marksMass / marksHeight ** 2;
console.log(BMIMark)

let jhonHeight = 1.95;
let jhonWeight = 92;
const BMIJhon = jhonWeight / (jhonHeight * jhonHeight);
console.log(BMIJhon)

const markHigherBMI = BMIMark > BMIJhon;
console.log(markHigherBMI)

const markWeight = 95;
const markHeight = 1.88;
const BMIMarkS = markWeight / markHeight ** 2;

const johnsWeight = 85;
const jhonsHeight = 1.76;
const BMIJhons = johnsWeight / (jhonsHeight * jhonsHeight)

const marksHigherBMI = BMIMarkS > BMIJhons;

console.log(BMIMarkS, BMIJhons, marksHigheconst */
/*const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "i'm " + firstName + ' ,a ' + (year - birthYear) + ' years old ' + job + '!'
console.log(jonas) */

//Template string
/*const jonasNew = `I'm ${firstName} ,a ${year - birthYear} year old ${job}!`
console.log(jonasNew)

console.log(`just a regular string...`)

console.log('string with \n\
anothe \n\
k');

console.log(`string
multiple
lines`)*/

//control string
/*const age = 15;

if (age >= 18) {
    console.log('sarah can dirve a car');
} else {
    const yearsLeft = 18 - age
    console.log(`sarah has too wait ${yearsLeft} years to dive a car`)
}


const birthYear = 1999;
let century;
if (birthYear <= 2000) {
    century = 20;
}
else { century = 21; }
console.log(century);*/

/*Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement */



/*let marksHeight = 1.69;
let marksMass = 78;
const BMIMark = marksMass / marksHeight ** 2;
console.log(BMIMark)


let jhonHeight = 1.95;
let jhonWeight = 92;
const BMIJhon = jhonWeight / (jhonHeight * jhonHeight);
console.log(BMIJhon);





if (BMIMark > BMIJhon) { console.log(`marks  BMI(${BMIMark}) is higher than jhons(${BMIJhon})`) }
else { console.log(`marks BMI(${BMIMark}) is not higher than jhon(${BMIJhon})`) }; */

//Type conversion
/*const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//Type coercion
console.log('i am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1 // '11'
n = n - 1
console.log(n)
*/


// 5 fasly value : 0 , '' ,undefined, null , NaN

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log('Dont spend it all!');
} else {
    console.log(" you  should get a job!")

}

let height;
if (height) {
    console.log('YAY! Height is defined');

} else {
    console.log('Height is undefined');
}*/
/*const age = 18;
if (age === 18) console.log('you just becmae an adult (strict)');

if (age == 18) console.log('you just becmae an adult(loose)');

const favourite = Number(prompt("what's your favourit number"));
console.log(favourite);
console.log(typeof favourite)

if (favourite === 23) {// 22 === 23 -> FALSE
    console.log('cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else if (favourite === 9) {
    console.log('9 is also a cool nmber')
} else {
    console.log('number is 27 or 7 or 9')
}
if (favourite !== 23) console.log('why not 23?') */

//LOGICAL OPERATORS
/*const hasDriversLicence = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
//     console.log('sarah is able t0 drive!');
// } else {
//     console.log('someone else should drive...');
// }

const isTired = true; // C
console.log(hasDriversLicence && hasGoodVision && isTired);


if (hasDriversLicence && hasGoodVision && isTired) {
   console.log('sarah is able to drive!');
} else {
   console.log('someone else should drive...');
}
*/


/*There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 10*/


/*const dolphinsScore = Number(96, 108, 89)
const koalasScore = Number(88, 91, 110)
const avgDolphinsScore = (96 + 108 + 89) / 3
const avgKoalasScore = (88 + 91 + 110) / 3
console.log(avgDolphinsScore, avgKoalasScore)

if (avgDolphinsScore === avgKoalasScore) {
    console.log(" no one won the game!");
} else if (avgDolphinsScore > avgKoalasScore) {
    console.log(' dolphins won the game!');
} else if (avgKoalasScore > avgDolphinsScore) {
    console.log('kolas won the game');
}*/
//bonus
/*const avgDolphinsScore = (97 + 112 + 15) / 3;
const avgKoalasScore = (109 + 95 + 12) / 3;
console.log(avgDolphinsScore, avgKoalasScore)
if (avgDolphinsScore === avgKoalasScore && avgDolphinsScore, avgKoalasSco re >= 100) {
    console.log("both wins the game!")
} else {
    console.log(" no one won the game!");
} else if (avgDolphinsScore > avgKoalasScore && avgDolphinsScore >= 100) {
    console.log(' dolphins won the game!');
} else if (avgKoalasScore > avgDolphinsScore && avgKoalasScore >= 100) {
    console.log('kolas won the game');
} */

//switch staments
/*const day = 'monday';

switch (day) {
    case 'monday': // day === monday
        console.log('plan my course structure');
        console.log('go to coding meet up');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('not a valid day!')
}


if (day === "monday") {
    console.log('plan my course structure');
    console.log('go to coding meet up');
}
else if (day === " tuesday") {
    console.log('prepare theory videos');
}
else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples');
} else if (day === 'saturday' || 'sunday') {
    console.log('have a great weekend')
} */

/*const age = 23
//age >= 18 ? console.log('i like to drink wine') : console.log('ilike to water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2)

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/
/*Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 */



