let markHeight = 1.88; // height in m
let markMass = 95;  //mass in kg

let johnHeight = 1.76; // height in m
let johnMass = 85;  //mass in kg

let markBMI = markMass / (markHeight * 2);
let johnBMI = johnMass / (johnHeight * 2);

let markHigherBMI = false;

if (markBMI > johnBMI) markHigherBMI = true;

console.log("Mark BMI: " + markBMI);
console.log("John BMI: " + johnBMI);

if (markHigherBMI === true) console.log("Marks BMI is Higher than Johns")
else console.log("Johns BMI is higher then Marks");

