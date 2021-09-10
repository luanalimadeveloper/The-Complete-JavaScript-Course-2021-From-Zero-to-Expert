'use strict';

///////////////////////////////////////
// Closures
// A closure makes a function remember all the variables that existed at the function's birthplace

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

/*
///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

const runOnce = function () {
  console.log('This never run again');
};

runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

//console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
//console.log(isPrivate);
console.log(notPrivate);
*/
///////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*
// Luana's solution

const poll = {
  question: 'What is your favourite programming language?',

  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!

  registerNewAnswer: function () {
    let phrase = '';
    for (const [i, el] of this.options.entries()) {
      phrase = phrase + el + '\n';
    }

    const numberOption = parseInt(prompt(`${this.question}\n${phrase}`));
    console.log(numberOption);

    if (
      numberOption >= 0 &&
      numberOption <= 3 &&
      typeof numberOption == 'number'
    ) {
      this.answers[numberOption] = this.answers[numberOption] + 1;
      console.log(this.answers);
    } else {
      console.log('Not permited');
    }
  },

  answers: new Array(4).fill(0),

  displayResults: function (type = 'string') {
    if (typeof type === 'string') {
      console.log(this.answers);
    } else if (typeof type === 'Array') {
      console.log('not string');
    }
  },
};

const a = [1, 2];
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults(a);
*/

/*
// Solution
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnser() {
    // Get anser
    const answer = Number(
      prompt(
        `${this.quesstion}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register awswer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

//poll.registerNewAnser();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnser.bind(poll));

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
*/

/*
///////////////////////////////////////
// The call and apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: funtion() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode} ${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'Luana Lima');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does not work
//book(23, 'Sarah Willians');

// Remenber :
// A function is really just an object, and objects have methods, and therefore, functions can have methods too.

// Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Silva');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 56, 'John Coper');
console.log(swiss);

// Apply method
const flightData = [583, 'Georde Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// Modern JavaScript
book.call(swiss, ...flightData);

//////// The Bind Method

//book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
//const bookLH = book.bind(lufthansa);
//const bookLX = book.bind(swiss);

bookEW(23, 'Steven Willian');

// // partial application - already set.
const bookEW23 = book.bind(eurowings, 2323);
bookEW23('Luana Lima');
bookEW23('Martha Cooper');

// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();

// AddEventListener is the higher order function, which receives a callback function (lufthansa.buyPlane)
// point to lufthansa - bind(lufthansa)
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
// Binds gives us a new function - a new specific function from the addTax function.
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

/*
///////////////////////////////////////
// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Luana');
greeterHey('Julia');

greet('Hello')('Maria');

// Challenge Arrow function
// Arrow function returning arrow function

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Luana');

/*
///////////////////////////////////////
// Functions Accepting Callback Functions

// Low-level functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  // name of the function
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('😜');
};

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

/*
///////////////////////////////////////
// How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const luana = {
  name: 'Luana Lima',
  passaport: 241218,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mrs. ' + passenger.name;

  if (passenger.passaport === 241218) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, luana);
// console.log(flight);
// console.log(luana);

// Is the same as doing
//const flightNum =flight;
//const passenger = luana;

const newPassport = function (penson) {
  person.passaport = Math.trunc(Math.random() * 1000000);
};

newPassport(luana);
checkIn(flight, luana);

///////////////////////////////////////
// Default Parameters
/*

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
*/
