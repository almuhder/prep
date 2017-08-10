function each(coll, func) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			func(coll[i], i);
		}
	} else {
		for (var key in coll) {
			func(coll[key], key);
		}
	}
}
/*
More Practice
1. Write a function called select that, given an object and an array of strings representing keys, returns a new object consisting of just the keys (and values) specified in the array of strings.
*/
function select(object, array) {
	// TODO: your code here
	var result = {};
	each(array, function(keyValue, index) {
		each(object, function(element, key) {
			console.log(key);
			if (array[index] === key) {
				result[key] = object[key];
			}
		});
	});
	return result;
}
var x = {
	a: 1,
	b: 2,
	c: 3
};
console.log(select({
	a: 1,
	b: 2,
	c: 3
}, ["a", "b"])); // => {a: 1, b: 2}


/*
2. Write a function called pluck that, given an array of objects as its first parameter and a string representing a key as its second parameter, returns an array of all the values found in each object in the array by using string as a key.

*/

var people = [{
	name: {
		first: "Alyssa",
		middle: "P.",
		last: "Hacker"
	},
	age: 26
}, {
	name: {
		first: "Louis",
		last: "Reasoner"
	},
	age: 21
}, {
	name: {
		first: "Ben",
		last: "Bitdiddle"
	},
	age: 34
}, {
	name: {
		first: "Eva",
		middle: "Lu",
		last: "Ator"
	},
	age: 40
}, {
	name: {
		first: "Lem",
		middle: "E.",
		last: "Tweakit"
	},
	age: 45
}];

function pluck(array, key) {
	var newArr = [];
	each(array, function(elment, index) {
		console.log('element : ' + elment);
		if (key === array[index][])
	});
	return newArr;
}


console.log(pluck(people, "age")); // => [26, 21, 34, 40, 45]

// // summation
// function summation(start, end) {
//   var sum = 0;
//   for (var i = start; i < end; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// // summation squared
// function summation2(star, end) {
//   var sum = 0;
//   for (var i = start; i < end; i = i + 2) {
//     sum = sum + squared(i);
//   }
//   return sum;
// }
// function summation3(start, end, step, next) {
//   var sum = 0;
//   for (var i = start; i < end; step(i) {
//       sum = sum + next();
//     }
//     return sum;
//   }
//   function inc(x) {
//     return x + 1;
//   }
//   summation(0, 4,function(x) {
//     return x + 2; 
//   }, squared);



// Warm up
/*
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


- Write a function called agesMinutes and return an array of all ages in minutes using map.
// -------------------------------------- //


We're going to write a function minimums that, given an array of arrays of numbers as an argument, returns a new array containing the minimum number of each inner array. For example:
   // our argument would look like this:
  var sampleInput = [ // it's an array
  [1, 3, 2], // of arrays of numbers
  [4, 23, 100],
  [7, 6, 3, -2]
  ];
  // and we want to be able to use maximums to do this:
  minimums(sampleInput); // => [3, 100, 7]
 Part One: Let's start by writing a function min that, when given an array of numbers computes the minimum number in that array. You will want to use each for this.
function min(numbers) {
   // YOUR CODE HERE
}
min([1, 3, 2]); // => 3
min([4, 23, 100]); // => 100
 
Part Two: Now that you have a function that computes the the min number in an array of numbers, use map to transform each array in the sampleInput into its minimum by completing the minimum function:
function minimums(arrays) {
      return // YOUR CODE HERE
}
*/