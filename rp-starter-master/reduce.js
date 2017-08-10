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

function sum(array) {
  var total = 0;
  each(array, function(element) {
    total += element;
  });
  return total;
}

function everyNumberEven(array) {
  // var result = true;
  // each(array, function(element) {
  //   return result && element % 2 === 0;
  // });
  // return result;
  return reduce(array, function(result, element) {
    return result && element % 2 === 0
  }, true);
}


// function reduce(array, func, start) {
//   var acc = start;
//   return each(array, function() {
//     acc = func(acc, element);
//   });
//   return acc;
// }


function reduce(array, f, start) {
  var acc = start;
  each(array, function(element) {
    acc = f(acc, element);
  });
  return acc;
}

function map(array, func) {
  var newArray = [];
  each(array, function(number, i) {
    newArray.push(func(number, i));
  });
  return newArray;
}



/*
Basic Requirements
1. We've shown that we can write the function sum -- which sums an array of numbers -- using reduce like this (see slides for more):
*/

var arrNum = [1, 2, 3, 4, 5];

function sum(numbers) {
  return reduce(numbers, function(total, number) {
    return total + number;
  }, 0);
}
console.log("Sum: " + sum(arrNum));
/*
 Replace the ??? below to complete the implementation of product, that returns the product of an array of numbers
 */
function product(numbers) {
  return reduce(numbers, function(result, number) {
    return result * number;
  }, 1);
}
console.log("product: " + product(arrNum));



// 2. Rewrite the averageAge function from the warmup using reduce. The function signature and people array are copied below for your convenience:

var people = [{
  name: {
    first: "Grace",
    middle: "B.",
    last: "Hopper"
  },
  age: 85
}, {
  name: {
    first: "Adele",
    last: "Goldstine"
  },
  age: 43
}, {
  name: {
    first: "Ada",
    last: "Lovelace"
  },
  age: 36
}, {
  name: {
    first: "Hedy",
    middle: "E.",
    last: "Lamarr"
  },
  age: 85
}, {
  name: {
    first: "Ruchi",
    last: "Sanghvi"
  },
  age: 34
}];

function averageAge(people) {
  // First you'll need to compute the sum of all the ages
  // Second, divide the sum by the number of people (people.length)
  // YOUR CODE HERE
  var ages = map(people, function(person) {
    return person.age;
  });
  // console.log(ages );
  return sum(ages) / people.length;
}
console.log(averageAge(people));

// The range function from yesterday looks like this:
function range(start, end) {
  var acc = [];
  for (var i = start; i <= end; i++) {
    acc.push(i);
  }
  return acc;
}
// Using range and reduce, complete the factorial function below that should compute the factorial of n.

console.log(range(1, 3));

function factorial(n) {
  var arr = range(1, n);
  // console.log("arr: "+arr);
  return reduce(arr, function(total, element) {
    return total = total * element;
  }, 1);
}
console.log(factorial(9));
// console.log(range(1,5));


// HINT: If you cannot think of how to do this, it may help to first try writing the function using each, and then refactor it to use range & reduce


// More Practice

// 1. The sumBy function from previous lessons can be implemented using each like this:

function sumBy(numbers, f) {
  var sum = 0;
  each(numbers, function(number) {
    sum = sum + f(number);
  });
  return sum;
}
// Rewrite sumBy using reduce.



function sumByUsingReduce(numbers, f) {
  return reduce(numbers, function(total, number) {
    return total + f(number)
  }, 0)
}

console.log(sumByUsingReduce([1, 2, 3, 4, 5], function(n) {
  return n;
}));


// 2.The max function below takes an array of numbers as a parameter, and returns the maximum number in the array:

function max(numbers) {
  var max = numbers[0];
  each(numbers, function(number) {
    if (number > max) {
      max = number;
    }
  });
  return max;
}

// Rewrite max using reduce.
function maxR(array) {
  return reduce(array, function(max, number) {
    if (max < number) {
      max = number;
    }
    return max;
  }, array[0]);
}

console.log(maxR([1, 4, 6, 2, 5, 9]));

// 3. Write a function called countOccurrences that, given a string and a character (a string with length one) as parameters, returns the total number of times that character occurs in the string. For example:

function countOccurrences(string, char) {
  var arrayString = string.split("");
  return reduce(arrayString, function(count, letter) {
    if (letter === char)
      count++;
    return count;
  }, 0);
}


console.log("countOccurrences: " + countOccurrences('hello', 'l')); // => 2
console.log("countOccurrences: " + countOccurrences('the', 'z')); // => 0
console.log("countOccurrences: " + countOccurrences('hello, world!', 'l')); // => 3



// 4. In the lecture (see slides) we ran through a function called everyNumberEven -- write functions like it that do the following:
// - Given an array of numbers, determine if every one of them is odd
function everyNumberOdd(array) {
  return reduce(array, function(result, element) {
    return result && element % 2 !== 0
  }, true);
}
console.log('everyNumberOdd ' + everyNumberOdd([9, 2, 3, 5, 5]));

// - Given an array of numbers, determine if every one of them is positive
function everyNumberPositive(array) {
  return reduce(array, function(result, element) {
    return result && element > 0
  }, true);
}
console.log('everyNumberPositive ' + everyNumberPositive([-9, 2, 3, 5, 5]));

// - Given an array of strings, determine if all of them have a length greather than 3.
function lengthGreater3(array) {
  return reduce(array, function(result, element) {
    return result && element.length >= 3
  }, true);
}
console.log('lengthGreater3 ' + lengthGreater3(['ab', 'acvd', 'awer']));

// - Given an array of strings, determines if all of them contain the letter "e".

function containE(array) {
  return reduce(array, function(result, element) {
    return result && element.indexOf('e') > -1
  }, true);
}
console.log('containE ' + containE(['aeb', 'ac', 'ae']));



// 5. Write a function every that takes two parameters: an array and a predicate (a function that returns true or false). every should return true if the predicate returns true for every element in the array. You should be able to use it to write everyNumberEven like this:
function everyNumberEven(numbers) {
  return every(numbers, function(number) {
    return number % 2 === 0;
  });
}

function every(array, f) {
  return reduce(array, function(arr, element) {
    return arr && f(element);
  }, true);
}

console.log("every :" + everyNumberEven([1, 2, 3, 4, 5, 6, 7]));
console.log("every :" + everyNumberEven([2, 4, 6]));
// Test that it works by rewriting the functions in exercise (4) above using every.


// Advanced
// 1. Let's write a function called join that works just like the built-in join, but using reduce! If you're unfamiliar with the built-in version of join, this is how it works:
// ["the", "quick", "brown", "fox"].join(" "); // => "the quick brown fox"
// ["one", "two", "three"].join(":");          // => "one:two:three"
// Part One: First, write a function called joinWith that takes three arguments: the string to join onto, the string that will be joined, and a separator. That is, it should work like this:
function joinWith(onto, next, separator) {
  // YOUR CODE HERE
}
joinWith("the quick", "brown", " "); // => "the quick brown"
joinWith("one:two", "three", ":"); // => "one:two:three"
// Part Two: Now, using joinWith and reduce, write join:
function join(array, separator) {
  // YOUR CODE HERE
}
join(["the", "quick", "brown", "fox"], " "); // => "the quick brown fox"
join(["one", "two", "three"], ":"); // => "one:two:three"
