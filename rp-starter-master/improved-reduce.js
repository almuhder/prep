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



// The imporved reduce
function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element) {
    acc = f(acc, element);
  });
  return acc;
}


// Basic Requirements

// 1. The factorial function can be written using reduce and range; and furthermore, this is a case where the initial value can be omitted. Write factorial using our updated version of reduce and omit the third argument.

// - HINT: Remember that the factorial of a number n is the product of all of the numbers from 1 to n, and the range function (shown below in problem 3) produces an array of numbers from start to end...



// 2. Use the updated version of reduce to write a function max that computes the maximum number in an array of numbers. Be sure to not include the third argument(the starting point).

function max(array) {
  return reduce(array, function(max, element) {
    if (max < element) {
      max = element;
    }
    return max;
  });
}


console.log(max([1, 2, 5, 4, 9, 3]));

// 3. The range function that we've explored so far looks like this:
// function range(start, end) {
//   var acc = [];
//   for (var i = start; i < end; i++) {
//     acc.push(i);
//   }
//   return acc;
// }
// Modify range so that the end parameter is optional, and in the event that it is not supplied, range computes a range from 0 to start.

function range(start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  var acc = [];
  for (var i = start; i < end; i++) {
    acc.push(i);
  }
  return acc;
}


// Advanced
// There is a way to implement reduce such that it works on both arrays and objects. You'll likely want to make use of Object.keys function.

function gReduce(coll, f) {
  if (Array.isArray(coll)) {
    if (acc === undefined) {
      acc = coll[0];
      coll = coll.slice(1);
    }
  } else {
    if (acc === undefined) {
      var key = Object.keys(coll)[0];
      acc = coll
      delete coll[key];
    }
  }
  each(coll, function(element) {
    acc = f(acc, element);
  });
  return acc;
}