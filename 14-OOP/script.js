'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator
/*
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
*/

///////////////////////////////////////
// Prototypes
/*
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

luana.calcAge();
matilda.calcAge();

console.log(luana.__proto__);
console.log(luana.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(luana));

// .prototypeOfLinkedObjects
// it sets the proto property on the object to the prototype property of the constructor function.
Person.prototype.species = 'Homo Sapiens';
console.log(luana.species, matilda.species);

console.log(luana.hasOwnProperty('firstName'));
// It simply has access to it because of its prototype.
console.log(luana.hasOwnProperty('species'));
*/
///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
/*
// Object.prototype (top of prototype chain)
console.log(luana.__proto__);
console.log(luana.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);

// The prototype property of the constructor is  the prototype of all the objects created by that constructor.
console.log(arr.__proto__ === Array.prototype);

// Methods here that are available for objects
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/
///////////////////////////////////////
// Coding Challenge #1

/*

1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them

Test data:
- Data car 1: 'BMW' going at 120 km/h
- Data car 2: 'Mercedes' going at 95 km/h

*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.accelerate();
car2.accelerate();
car1.brake();
car2.brake();
*/

///////////////////////////////////////
// ES6 Classes
//Classes in JavaScript are synthetic sugar - implement prototypal inheritance behind the scenes

// Behind the scenes classes are still functions
// class expression
//const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted : We cant use them before they are declared in the code.
// 2. Classes are first-class citizes : pass them into functions and also return them from functions.
// 3. Classes are executed in strict mode.
