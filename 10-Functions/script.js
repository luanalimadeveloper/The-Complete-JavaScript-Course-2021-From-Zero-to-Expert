'use strict';

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
