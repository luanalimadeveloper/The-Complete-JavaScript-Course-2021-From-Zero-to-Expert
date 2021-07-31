'use strict';


///////////////////////////////////////
// Activating Strict Mode
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
*/

///////////////////////////////////////
// Functions
/*
function logger() {
    console.log('My name is Luana');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
const num = Number('23');
*/

///////////////////////////////////////
// Function Declarations vs. Expressions

/*
// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear; 
}
const age1 =  calcAge1(1991);

// Function expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1,age2);
*/


///////////////////////////////////////
// Arrow functions

/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement; 
    return  `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Luana')); console.log(yearsUntilRetirement(1980,'Bob'));
*/


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}


console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));


///////////////////////////////////////


