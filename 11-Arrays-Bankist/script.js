'use strict';

// Arrays are objects, and that they get access to special built in methods that we can essentially see as tools for arrays.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
/*
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // .textContent = 0;

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type 
        movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`;
};
calcDisplaySummary(account1.movements);

// create a new array - map
// modify (mutate) a array - for each

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);
*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
///////////////////////////////////////////////// Symple Array Methods

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE METHOD
console.log(arr.slice(2)); // start from position number 2
console.log(arr.slice(2, 4)); // the position 4 will be not included
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // a copy - to chain multiple methods together,
console.log(arr.slice([...arr]));

// SPLICE
// Splice mutates the original array
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
// Reverse mutates the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2); // Concat method
console.log(letters);
console.log([...arr, ...arr2]); // Spread Operator

// JOIN
console.log(letters.join(' - '));
*/

/*
/////////////////////////////////////////////////
// Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
//// The forEach method calls the callback function in each iteration.
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
*/

/*
/////////////////////////////////////////////////
// forEach With Maps and Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// Set doesn't have keys
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

/////////////////////////////////////////////////
// Code Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.

Your tasks:

Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy.
")
4. Run the function for both test datasets

Test data:
- Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
- Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far.

GOOD LUCK 
*/

/*
const juliasData = [3, 5, 2, 12, 7];
const katesData = [4, 1, 15, 8, 3];
const juliasData2 = [9, 16, 6, 8, 3];
const katesData2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const newDogsJulia = dogsJulia.slice(1, 3);
  console.log(newDogsJulia);

  const joinDogs = newDogsJulia.concat(dogsKate);
  console.log(joinDogs);

  joinDogs.forEach(function (dog, i) {
    dog >= 3
      ? console.log(`Dog number ${i} is an adult, and is ${dog} years old`)
      : console.log(`Dog number ${i} is still a puppy`);
  });
};

checkDogs(juliasData, katesData);
console.log('Test 2');
checkDogs(juliasData2, katesData2);
*/

/*
/////////////////////////////////////////////////
// The Map Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// console.log(movements);
// console.log(movementsUSD);

// With arrow function
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

// With for of
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
*/

/////////////////////////////////////////////////
// The Filter Method
// Filter elements that satisfy some conditions

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

/*
/////////////////////////////////////////////////
// The Reduce Method
// Reduce is fot reduce the array in one single value

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}:   acc ${acc}       cur ${cur}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

// With arraw function
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// With for of
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
// keep track the biggst value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(`Max value: ${max}`);
*/

/////////////////////////////////////////////////
// The Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4

2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages).

4. Run the function for both test datasets

Test data:
- Data 1: [5, 2, 4, 1, 15, 8, 3]
- Data 2: [16, 6, 10, 5, 6, 1, 4]
*/
// 1)

/*
const ageDogsArray = [5, 2, 4, 1, 15, 8, 3];
const ageDogsArray2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  // 1
  const calcHumanAge = ages.map(function (age) {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });
  console.log(calcHumanAge);

  // 2
  const adults = calcHumanAge.filter(adultAge => adultAge >= 18);
  console.log(adults);

  // 3

  // const average = adults.reduce(function (acc, age, i, arr) {
  //   return acc + age / arr.length;
  // }, 0);

  const average =
    adults.reduce(function (acc, age) {
      return acc + age;
    }, 0) / adults.length;
  console.log(average);
};

console.log(calcAverageHumanAge(ageDogsArray));
console.log(calcAverageHumanAge(ageDogsArray2));
*/

/////////////////////////////////////////////////
// The Magic of Chaining Methods

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    //console.log(arr);
    return mov * eurToUsd;
  })
  //.map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositUSD);
*/

/////////////////////////////////////////////////
// Coding Challenges #3

/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
as an arrow function, and using chaining!

Test data:
- Data 1: [5, 2, 4, 1, 15, 8, 3]
- Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

/*
const ageDogsArray1 = [5, 2, 4, 1, 15, 8, 3];
const ageDogsArray2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge(ageDogsArray1));
console.log(calcAverageHumanAge(ageDogsArray2));
*/

/////////////////////////////////////////////////
// The find Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

// When true - the object is returned
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
