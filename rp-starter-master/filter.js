function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}


/*
Basic Requirements
Use filter to write the following functions:
  1)- Write a function called evens that takes an array of numbers as a parameter, and returns an array of only the even numbers in the parameter.
  2)- Write a function called multiplesOfThree that takes an array of numbers as a parameter, and returns an array of only the numbers that are multiples of three.
  3)- Write a function called positives that takes an array of numbers as a parameter, and returns an array of only the numbers that are positive.
  4)- Write a function called evenLength that takes an array of strings and returns an array of only the strings with an even length.
*/

var numbers1 = [-2, -44, -54, 1, 2, 3, 4, 5, 6, 7, 8];

function even(array) {
  return filter(array, function(element) {
    if (element % 2 === 0)
      return element
  });
}

function multiplesOfThree(array) {
  return filter(array, function(element) {
    if (element % 3 === 0)
      return element
  });
}

function positives(array) {
  return filter(array, function(element) {
    if (element > 0)
      return element
  });
}

function evenLength(arrString) {
  return filter(arrString, function(element) {
    if (element.length % 2 === 0)
      return element
  });
}

console.log(even(numbers1));
console.log(multiplesOfThree(numbers1));
console.log(positives(numbers1));
console.log(evenLength(['aa', 'abc', 'rewq']));
/*
// More practices : 

1) Write function called moveZero that accepts an array of numbers as paramerter and return the numbers and move the zero to the end.

NOTE: You need to use fiter
*/

function moveZero(numbers) {
  // To-Do code .. 
}


moveZero([2, 0, 3, 0, 40, 3, 6, 0, 10, 11]); // ==> [2,3,40,3,6,10,11,0,0,0]
/*
2) Write function called moveEveryZero that accepts  an array of numbers as paramerter and return the numbers (zero or contains zero like 40) to the end.
*/
function moveEveryZero(numbers) {
  // To-Do code .. 
}


moveEveryZero([2, 0, 3, 0, 40, 3, 6, 0, 10, 11]); // ==> [2,3,3,6,11,40,10,0,0,0])


/*
3) Write function called strongPasswords that accepts an array of object representing usersData (email, password) and retrun an array of objects with the strong Password only using filter

Note: Strong password is comnied of :
  - capital letters
  - small letters
  - numbers
  - sumbols
  - at least 8 characters long
*/
var usersData = [{
  user: {
    email: 'majd@rbk.org',
    password: "_Majd(2017)"
  }
}, {
  user: {
    email: 'fatema@rbk.org',
    password: "12345"
  }
}, {
  user: {
    email: 'maher@rbk.org',
    password: "M@her2017"
  }
}, {
  user: {
    email: 'sahar@rbk.org',
    password: "saher2017"
  }
}];

function strongPasswords(array) {

}


strongPasswords(usersData); // ==> [
// { user: {email: 'maher@rbk.org', password: "M@her2017"}},
// { user: {email: 'maher@rbk.org', password: "M@her2017"}}
// ];



/*Warm Up */
// Write a function called nameToUpper that accepts an array of object and return an object after converting the first name into captial letter.
var people = [{
  name: {
    first: 'Majd',
    middle: 'Eddin',
  },
  age: 30
}, {
  name: {
    first: 'Fatima',
    last: 'Himmamy'
  },
  age: 26
}, {
  name: {
    first: 'Sahar',
    middle: 'MHD'
  },
  age: 27
}, {
  name: {
    first: 'Nour',
    middle: 'Eddin',
  },
  age: 15
}, {
  name: {
    first: 'Ahmad',
    last: 'Awad'
  },
  age: 33
}];


function nameToUpper(array) {

}
nameToUpper(people);
/* 
=>[
name: { 
             first: 'MAJD', 
             middle: 'Eddin', 
       }, 
       age: 30 
       }, { 
       name: { 
             first: 'FATIMA', 
             last: 'Himmamy' 
       }, 
       age: 26 
       }, { 
       name: { 
             first: 'SAHAR', 
             middle: 'MHD' 
       }, 
       age: 27 
       }, { 
       name: { 
             first: 'NOUR', 
             middle: 'Eddin', 
       }, 
       age: 15 
       }, { 
       name: { 
             first: 'AHMAD', 
             last: 'Awad' 
       }, 
       age: 33 
 }
]
*/


// Use filter to write the following functions: 
// - Write a function called onlyEven accepts an array of numbers as a parameter and return the even numbers only

function onlyEven(array) {

}


onlyEven([1, 2, 3, 4, 5, 6]); // ==> [2,4,6]

// - Write a function called oddFive accepts an array of numbers as a parameter and return the odd numbers only which end with 5 

function oddFive(array) {

}
oddFive([1, 2, 44, 45, 65, 10, 50, 555]); // ==> [45,65,555]ƒ