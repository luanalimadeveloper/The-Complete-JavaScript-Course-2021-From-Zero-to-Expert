'use strict';

// Constructor function: Only function declarations and function expressions
const Person = function (firstName, birthYear) {
  // Instance properties - Set properties to that object.
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

// new operator: To call the function and more.
const luana = new Person('Luana', 1992);
console.log(luana);

// 1. New {} (object) is created
// 2. Function is called, this = {} (This keyword will be set to this newly created object)
// 3. linked to prototype
// 4. function automatically return {}

// matilda is an instance of person
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(luana instanceof Person);
