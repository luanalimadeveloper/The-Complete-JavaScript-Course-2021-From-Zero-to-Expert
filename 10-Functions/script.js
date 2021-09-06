'use strict';

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
