'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;
/*
// Normal function
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUSD;
// });

// Arrow function
const movementsUSD = movements.map(mov => mov * eurToUSD);
console.log(movements);
console.log(movementsUSD);

const movementsCopy = [];
for (const mov of movements) {
  movementsCopy.push(mov * eurToUSD);
}
console.log(movementsCopy);

const movementsDesc = movements.map(function (mov, i, arr) {
  if (mov > 0) {
    return `${i + 1}: You deposited ${mov}`;
  } else {
    return `You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movementsDesc);


// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'AUD', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice());

// Splice
arr.splice(1, 2);
console.log(arr);

// Reverse
const arr2 = ['j', 'i', 'h', 'g'];
console.log(arr2.reverse());
console.log(arr2);

// COncat
const letters = arr.concat(arr2);
console.log(letters);

// Join
console.log(letters.join(' '));

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log(`--------`);

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log(`--------`);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

/////////////////////////////////////////////////
*/

// Challenges
///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀


const checkDogs = function (dogsJulia, dogsKate) {
  let dogsJuliaCorrected = [...dogsJulia];
  let dogsKateCopy = [...dogsKate];
  dogsJuliaCorrected.shift();
  dogsJuliaCorrected.pop();

  const dogs = dogsJuliaCorrected.concat(dogsKateCopy);
  console.log(dogs);

  dogs.forEach(function (age, index, array) {
    if (age <= 3) {
      console.log(
        `Dog ${index + 1} is ${age} years old and is still a puppy 🐶`
      );
    } else {
      console.log(`Dog ${index + 1} is ${age} years old and an adult 🐺`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);

const withdrawals = movements.filter(movs => movs < 0);
console.log(withdrawals);

// Accumulator  is like a snowball
console.log(movements);
// const balance = movements.reduce(function (accum, cur, i, arr) {
//   console.log(`Iteration ${i}: ${accum}`);
//   return accum + cur;
// }, 0);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const balance = movements.reduce((accum, cur) => accum + cur, 0);
const maxBalance = movements.reduce((acc, move) => {
  if (acc > move) {
    return acc;
  } else {
    return move;
  }
});

console.log(balance);
console.log(maxBalance);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const ages = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);

//   const adults = humanAges.filter(humanAge => humanAge > 18);
//   console.log(adults);

//   const averageHumanAge = adults.reduce(function (accum, curr, i, arr) {
//     return (accum + curr) / i;
//   });
//   console.log(averageHumanAge);
// };

// You can chain the above function methods as long as each function creates a new array
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov);
console.log(totalDepositsUSD);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(humanAge => humanAge > 18)
    .reduce((accum, curr, i, array) => (accum + curr) / i);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

// Some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// Every - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
console.log(movements.every(mov => mov > 0));

// Separate callback as a function for some & every
const deposit = mov => mov > 0;
console.log(movements.some(deposit));

// Flat- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

//////////// Sorting Arrays
const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(movements);

// If you want to keep the order, create an equation so that you return a value less than 0, i.e. return < 0, A, B (keep order)
// If you want to switch the order, create an equation so that you return > 0, B, A (switch order))

// A is the preceding number and B is the second number. If you do A - B and you get a negative number, then a < b and thus you keep the current order or numbers. If you do A - B and you get a positive number, then a > b and thus you reverse the order of numbers

// Ascending
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } if (a < b) {
//     return -1;
//   }
// });

// Descending
// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } if (a < b) {
//     return 1;
//   }
// });

// If A is greater than B, the order will be kept. However if B is greater than A, than the order will be reversed, and B will be placed before A in the array
movements.sort((a, b) => a - b);

console.log(movements);

// flat - The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap - https://www.javascripttutorial.net/es-next/javascript-array-flatmap/ - The flatMap() method first maps each element in an array using a mapping function and then flattens the results into a new array.
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// More ways of creating and filling arrays
// Creating array
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));

// Filling array - The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
x.fill(1);
console.log(x);

const z = new Array(12);
z.fill(1, 3, 4);
console.log(z);

z.fill(23, 2, 6);
console.log(z);

// Filling array programmatically - The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
const arrX = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = Array.from({ length: 7 }, () => 1);
console.log(arr2);

const j = Array.from({ length: 7 }, (curr, i) => i + 1);
console.log(j);
