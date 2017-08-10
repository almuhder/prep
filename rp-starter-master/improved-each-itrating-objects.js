var array = [1, 2, 3, 4, 5];
var object = {
  a: 2,
  b: 3,
  c: 4
};


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

function square(nums) {
  var acc = {};
  each(nums, function(num, key) {
    acc[key] = num * num;
  });
  return acc;
}

square(object);
// console.log(object);


/*
Basic Requirements
1. Using our updated version of each, write the following functions:
- values: accepts an object as a parameter, and outputs an array of the object's values.
- keys: accepts an object as a parameter, and outputs an array of the object's keys.
 */

function values(object) {
  var arrObj = [];
  each(object, function(elment, key) {
    arrObj.push(object[key]);
  });
  return arrObj;
}

function keys(object) {
  var arrObj = [];
  each(object, function(elment, key) {
    arrObj.push(key);
  });
  return arrObj;
}
// console.log(values(object));
// console.log(keys(object));
/*

2. Write a function called keysLongerThan that accepts two parameters -- an object and a number -- and returns a new object with only the key/value pairs in the input object whose keys are longer than the numeric argument, e.g.:

*/
keysLongerThan({
  name: "Annyeong",
  age: 25,
  favoriteColor: "blue"
}, 3);
// => {name: "Annyeong", favoriteColor: "blue"}
keysLongerThan({
  name: "Annyeong",
  age: 25,
  favoriteColor: "blue"
}, 4);
// => {favoriteColor: "blue"}

//Make sure to use the new version of each for this.

function keysLongerThan(object, number) {
  var newObj = {};
  each(object, function(elment, key) {
    if (key.toString().length > number) {
      newObj[key] = object[key];
    }
  });
  return newObj;
}

// console.log(keysLongerThan({
//   name: "Annyeong",
//   age: 25,
//   favoriteColor: "blue"
// }, 4));



/*
3. Write a function called incrementValues that accepts an object as a parameter, and outputs an object with all of its numeric values incremented by one. You'll want to use the updated version of each for this, and you will need to check the type of each value to determine whether or not it should be incremented.
HINT: Try entering the following expressions in to your console:
typeof "hello"; // => "string"
typeof 1;       // => "number"
typeof true;    // => "boolean"
*/

function incrementValues(object) {
  var newObj = {};
  each(object, function(elment, key) {
    if (typeof object[key] === 'number') {
      newObj[key] = object[key] + 1;
    }
  });
  return newObj;
}
var object1 = {
  age: 12,
  size: 1,
  name: 'test',
  flag: true
};
// console.log(typeof object1['age']);
// console.log(incrementValues({
//   name: "Annyeong",
//   age: 25,
//   favoriteColor: "blue"
// }));
// console.log(incrementValues(object1));



/*
4. Write a function called objectToArrayOrArrayToObject that takes an array or an object and transforms any array or object within the array or object into an object or array.
objectToArrayOrArrayToObject(coll){
            ...
}
var ex = {ages: [23, 44, {min: 1, max: 2}], people: {height: "tall", eye_color: "brown"}};
objectToArrayOrArrayToObject(ex);
// {ages: {0: 23, 1: 44, 2: [1, 2]} people: ["tall", "brown"]}
*/

// // check if coll is array
// if (Array.isArray(coll)) {
//   var newObj = {};
//   each(coll, function(elment, i) {
//     newObj[i] = coll[i];
//   });

//   return newObj;
// }
// // coll is an object
// else {
//   var newArr = [];
//   each(coll, function(elment, key) {
//     newArr.push(coll[key]);
//   });
//   return newArr;
// }
// ---------------------- 
// var newObj = {};
// each(object, function(elment, key) {
//   // check if the elment is array
//   if (Array.isArray(object[key])) {
//     var tempObj = {};
//     var arr1 = [];
//     each(object[key], function(subElment, i) {
//       if (!Array.isArray(tempObj[i])) {
//         arr1.push(tempObj[i]);
//       }
//       tempObj[i] = subElment;
//     });
//     newObj[key] = tempObj;
//   } else {
//     // the elment is object
//     var arr = [];
//     each(object, function(elment, key) {
//       arr.push(object[key]);
//     });
//     newObj[key] = arr;
//   }

// });
// return newObj;

function objectToArrayOrArrayToObject(object) {

  var newObj = {};

  return each(object, function(element, key) {
    // check if it's end of the object
    if (typeof object[key] === undefined) {
      return newObj;
    }
    // if it's array
    if (Array.isArray(object[key])) {
      
    } else {

    }
    return newObj;
  });


}
function objectToArray(){
  var newArr = [];
  each(object, function(elment, key){
    newArr.push(object[key]);
  })
  return newArr; 
}

function arrayToObject(array){
  var newObj = {};
  each(array, function(elment, i ){
    newObj[i] = array[i];
  });
  return newObj 
}

var x = {
  ages: [23, 44, {
    min: 1,
    max: 2
  }],
  people: {
    height: 'tall',
    eye_color: 'brown'
  }
};
// console.log(objectToArrayOrArrayToObject([1, 2, 3, 4]));
// console.log(objectToArrayOrArrayToObject(object1));
console.log('------------------- objectToArrayOrArrayToObject -----------------');
console.log(objectToArrayOrArrayToObject(x));
console.log('------------------------------------------------------------------');
console.log("{ages: {0: 23, 1: 44, 2: [1, 2]} people: [\'tall\', \'brown]']}");
console.log('------------------------------------------------------------------');


var ex = {
  // ages is an array it must be converted into object
  ages: [23, 44, {
    min: 1,
    max: 2
  }],
  // people is an object it will converted into array
  people: {
    height: 'tall',
    eye_color: 'brown'
  }
};
objectToArrayOrArrayToObject(ex);
// {ages: {0: 23, 1: 44, 2: [1, 2]} people: ['tall', 'brown']}
/*
5. Write a function called oddEvenArray that accepts an object as parameter and return array of numbers ( you need to arrange the new array odd number at the beginning then the even numbers)
*/

function oddEvenArray(object) {
  var arr = [];
  var oddArr = [];
  var evenArr = [];
  each(object, function(elment, key) {
    if (typeof object[key] === 'number') {
      // if even
      if (object[key] % 2 === 0) {
        evenArr.push(object[key])
      } else {
        oddArr.push(object[key])
      }
    }

  });
  arr = oddArr.concat(evenArr);
  return arr;
}

// console.log(oddEvenArray({
//   a: 3,
//   b: 5,
//   c: 4,
//   d: 1,
//   e: 10,
//   f: 12,
//   g: 56,
//   h: 44,
//   i: 32
// })); // ==> [3,5,1,4,10,12,56,44,32]

// More challenge : return the odd numbers ordered Ascending and the even numbers descending 
oddEvenArray({
  a: 3,
  b: 5,
  c: 4,
  d: 1,
  e: 10,
  f: 12,
  g: 56,
  h: 44,
  i: 32
}); // ==> [1,3,5,56,44,32,12,10,4]

function oddEvenArrayResort(object) {
  var arr = [];
  var oddArr = [];
  var evenArr = [];
  each(object, function(elment, key) {
    if (typeof object[key] === 'number') {
      // if even
      if (object[key] % 2 === 0) {
        evenArr.push(object[key])
      } else {
        oddArr.push(object[key])
      }
    }

  });
  oddArr.sort(function(a, b) {
    return a - b
  });
  evenArr.sort(function(a, b) {
    return b - a
  });

  arr = oddArr.concat(evenArr);
  return arr;
}

// console.log(oddEvenArrayResort({
//   a: 3,
//   b: 5,
//   c: 4,
//   d: 1,
//   e: 10,
//   f: 12,
//   g: 56,
//   h: 44,
//   i: 32
// }));
/*
6. Write a function called isPrimeArray that accepts an object as parameter and return array of prime numbers in the object
*/

function isPrime(object) {
  var arr = [];
  each(object, function(elment, key) {
    if (typeof object[key] === 'number') {
      // if(object[key] )  
    }
  });
  return arr;
}

isPrime({
  a: 3,
  b: 5,
  c: 4,
  d: 1,
  e: 10,
  f: 12,
  g: 56,
  h: 44,
  i: 32
}); // ==> [3,5,1]

/*
7. Write a function called x that take an array or object as paramerter and 
*/



/*Warm up
1). Write a function called ObjectToArrayArrayToObject, that will take an object or array and will return the other kind, for example if the parameter was array it will return an object, if the parameter was object it will return an array. 
Note : You don't need to deal with nested object inside an array or nested array inside an object.
*/
function ObjectToArrayArrayToObject(coll){
  
}

ObjectToArrayArrayToObject({a:'Majd', b:'Fatima', c: 'Maher', d: 'Sahar' }); // ===>  ['Majd', 'Fatima', 'Maher', Sahar]

ObjectToArrayArrayToObject(['Majd', 'Fatima', 'Maher', Sahar]); // ===>  {a:'Majd', b:'Fatima', c: 'Maher', d: 'Sahar' }

ObjectToArrayArrayToObject(['Majd', 'Fatima', 'Maher', Sahar, Ahmad]); // ===>  {0:'Majd', 1:'Fatima', 2: 'Maher', 3: 'Sahar' , 4 : 'Ahmad'}

// Extra challenge: Can you change the keys of the returned object from numbers (1,2,3,4) into (a,b,c,d,e) so the returned object will be: 
// {a:'Majd', b:'Fatima', c: 'Maher', d: 'Sahar' , e: 'Ahmad'}


/*
2) Write a function called doubledArray that accepts an object as parameter and return array of doubled numbers in the object. 
- DO NOT forget to check for the EDGE CASES like when the value of the key object is not a number. You have only to return the number.
*/
function doubledArray(object){

}