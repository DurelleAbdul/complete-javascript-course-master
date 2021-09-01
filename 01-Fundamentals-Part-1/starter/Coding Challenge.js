/*Coding Challenge #1

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
GOOD LUCK �


let markWeight = 95;
let markHeight = 1.88;

let johnWeight = 85;
let johnHeight = 1.76;

let durelleWeight = 130;
let durelleHeight = 1.76;

markBMI = markWeight / (markHeight ** 2);
johnBMI = johnWeight / (johnHeight ** 2);

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);


//Coding challenge #2

if (markHigherBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than Johns(${johnBMI})`);
}
else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI})`);
}


const dolphinAvg = (97 + 112 + 101) / 3;
const KoalasAvg = (109 + 95 + 106) / 3;

if (dolphinAvg > KoalasAvg && dolphinAvg >= 100) {
    console.log(`Dolphin's win with an average of ${dolphinAvg}`);
}
else if (KoalasAvg > dolphinAvg && KoalasAvg >= 100) {
    console.log(`Koala's win with an average of ${KoalasAvg}`);
}
else if (dolphinAvg === KoalasAvg && dolphinAvg >= 100 && KoalasAvg >= 100) {
    console.log(`Its a DRAW!!!!`);
}
else {
    console.log(`No one wins :(`);
}

console.log(`${dolphinAvg} and ${KoalasAvg}`);
*/





