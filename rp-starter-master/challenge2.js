// use the following helper functions in your solution
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

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}

// Remember to relax, take short walks if needed, 
// and throw garbage at Addie(if it helps you relax)

//=============================================================================
/*                              Q1                                           */
//=============================================================================
//write a function that takes a string as an input and returns an array
//containing the length of each word in that string.
//solve it using one of the helpers functions(reduce,each,map,filter)

function wordLengths(str) {
  //your code is here
  // return str.split("").length;
  var result = [];
  var arr = str.split(" ");
  console.log(arr)
  var count = 0;
  each(arr, function(element, i) {
    if (typeof element !== 'undefined')
      result.push(element.length);
  });
  return result;
}

console.log(wordLengths("hello its me")); // [5,3,2]
//=============================================================================
/*                              Q2                                           */
//=============================================================================
//write a function that takes a string as an input and returns an array
//with only the words of length that are longer than 3.
//solve it using one of the helpers functions(reduce,each,map,filter)

function wordsLongerThanThree(str) {
  //your code is here
  var arr = str.split(" ");
  var result = [];
  filter(arr, function(element, i) {
    if (element.length > 3)
      result.push(element);
  });
  return result;
}
console.log(wordsLongerThanThree("hello its me again")); // [ "hello", "again" ]
//=============================================================================
/*                              Q3                                           */
//=============================================================================

//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the helpers functions(reduce,each,map,filter)

function values(obj) {
  // your code is here
  var result = [];
  each(obj, function(element, key) {
    result.push(obj[key]);
  });
  return result;
}
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129]; 

console.log(values({
  first: 5,
  second: 'something',
  third: 129
}));

//=============================================================================
/*                                  Q4                                       */
//=============================================================================
// Using reduce, write a function countOccurrences that accepts two parameters: a string, 
// and a character (e.g. "a"), and returns number of times that character occured:

function countOccurrences(string, character) {
  // your code is here

  var arr = string.split("");
  return reduce(arr, function(acc, element) {
    if (element === character) {
      acc++  ;
    }
    return acc; 
  }, 0);

}
console.log(countOccurrences("hello", "l")); // 2
console.log(countOccurrences("hello, world!", "l")); // 3

//=============================================================================
/*                                  Q5                                      */
//=============================================================================
//Depending on data modeling concept that you have learned:
//create a factory function called makeCar that represents cars,
// what different attributes cars may have? create two cars object from your factory function and save them in one array called cars!

function makeCar(name, model, type, color) {
  // TODO: Your code here
  return {
    name: name,
    model: model,
    type: type,
    color: color
  }
}

// write function displayCar that can be used to display one car

function displayCar(car) {
  // TODO: Your code here
  return 'Car name: ' + car.name + "\nCar Model: " + car.model;
}

var car1 = makeCar('KIA', '2017', 'Cydan', 'Black');
console.log(displayCar(car1));