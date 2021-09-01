/* let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Zino';
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = 'Assistant'
let myCurrentJob = 'Programmer';

console.log(myCurrentJob);

// true;
// console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);


console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Durelle');

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1996;

console.log(typeof year);

console.log(typeof null);


let age = 25;
age = 26;

const birthyear = 1996;
//   birthyear = 1997; const values cant change
// const job; You need an initial value!!!
// Good practice to use const by default

// Var is the old way to declare variables
var job = "programmer";
job = "LOl";

// this creates a property on the global
lastName = "Abdul";
console.log(lastName);


//Basic Operators
const now = 2021;

const ageDurelle = now - 1996;
const ageCayla = now - 2001;
console.log(ageDurelle, ageCayla);

console.log(ageDurelle * 2, ageCayla / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2*2*2

const firstName = "Durelle";
const lastName = "Abdul";
console.log(firstName + " " + lastName);

// Assignment Operators

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100;
x++ // x = x + 1 = 26
x--;
x--;
console.log(x);

//Comparison operators

console.log(ageDurelle > ageCayla); // <, >, >=, <=
console.log(ageCayla >= 21); //includes it in the range

const isFullAge = ageCayla >= 21;
console.log((now - 1991) > (now - 2019));


// Operator Precendence  MDN web docs developer.mozilla.org

const now = 2021;
const ageDurelle = now - 1996;
const ageCayla = now - 2001;
console.log(now - 1996 < now - 2001);

let x, y;
x = y = 25 - 10 - 5; // x = Y = 10;
console.log(x, y);

const averageAge = (ageDurelle + ageCayla) / 2;
console.log(ageDurelle, ageCayla, averageAge);


// 17: Strings and temperal literals

const firstName = "Durelle";
const job = "Programmer";
const birthyear = 1996;
const year = 2021;

const durelle = "I'm " + firstName + ", a " + (year - birthyear) + " year old " + job;

console.log(durelle);

// temperal literal
const durelleNew = `I'm ${firstName}, a ${year - birthyear} year old ${job}`;
console.log(durelleNew);

console.log(`Just a regular string with back-ticks`);

console.log('String with \n\
multiple\n\
lines');

console.log(`String with
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log("Durelle can start getting his Drivers License");
}
else {
    console.log(`Durelle can only get his drivers license in ${18 - age} years`);
}

const birthyear = 1996;
let century;
if (birthyear <= 2000) {
    century = 20;
}
else if (birthyear > 2000 && birthyear < 3000) {
    century = 21;
}
console.log(`born in the ${century}th/st century`);


// Type Conversion and type Coercion
// Coercion is when Javascript automatically converts data types automatically for us

const inputYear = '1996';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(Number('Durelle')); //NaN (invalid number)
console.log(String(23), 23);

//Type Coercion
console.log('I am ' + 23 + ' ' + 'years old');//Coercion
console.log('23' - '10' + 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1; //'11'
n = n - 1;
console.log(n);


// Truthy and falsy values
// 5 falsy values = 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Durelle'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;

if (money) {
    console.log("Don't spend it all ;)");
}
else
    console.log('You should get a job!');

let height;
if (height) {
    console.log('Yay! type is defines');
}
else
    console.log('Height is UNDEFINED');



//  Equality operators === and ==
const age = '18';

if (age === 18)
    console.log('Person is exactly 18 (strict)');

if (age == 18)
    console.log('Person is exactly 18 (loose)');
// == uses type coercion

const favNumber = Number(prompt("what's your favourite number?"));
console.log(favNumber);

if (favNumber === 23) // '23' == 23
{
    console.log('Cool! 23 is an amazing number!');
}
else if (favNumber === 7) {
    console.log('Nice! just like mine');
}
else console.log("seems ok!!");

if (favNumber !== 7) console.log("why not 7?");



// Logical operations

const hasDrivers = true;
const hasGoodVision = true;

console.log(hasDrivers && hasGoodVision);
console.log(hasDrivers || hasGoodVision);
console.log(!hasDrivers);

const shouldDrive = hasDrivers && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah can drive');
// }
// else console.log('Someone else should drive');

const isTired = false;
console.log(hasDrivers && hasGoodVision && isTired);


if (hasDrivers && hasGoodVision && !isTired) {
    console.log('Sarah can drive');
}
else {
    console.log('Someone else should drive');
}
*/

//Switch Statemt

const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log(`Plan the course structure`);
        console.log(`Complete an assignment`);
        break;
    case 'tuesday':
        console.log(`Prepare food planning`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Study!!`);
        break;
    case 'friday':
        console.log(`Yaaaaaay it's friday!!`)
        break;
    case 'saturday':
    case 'Sunday':
        console.log(`Enjoy the weekend!`);
        break;
    default:
        console.log(`Not a valid day!`);
}















