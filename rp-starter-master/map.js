var numbers = [1, 2, 3, 4, 5, 6];

function each(coll, f) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			f(coll[i], i);
		}
	} else {
		for (var key in coll) {
			f(coll[key] = key);
		}
	}
}


function map(array, func) {
	var newArray = [];
	each(array, function(number, i) {
		newArray.push(func(number, i));
	});
	return newArray;
}

function squareAll(array) {
	return map(array, function(element) {
		return element * element;
	});
}
console.log(squareAll(numbers));


//Basic Requirements
//1. We can rewrite the ages function from the warmup using map like this:
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

function ages(people) {
	return map(people, function(person) {
		return person.age;
	});
}

//Rewrite the functions firstNames, lastNames and fullNames using map as shown above.

console.log(ages(people));

function firstNames(people) {
	return map(people, function(person) {
		return person.name.first;
	});
}
console.log(firstNames(people));

function lastNames(people) {
	return map(people, function(person, key) {
		// if (typeof person.name.last !== 'undefined')
		return person.name.last;
	});
}
console.log(lastNames(people));
console.log("//--------------- Full Name ---------------  // ");

function fullName(people) {
	return map(people, function(person, key) {
		if (typeof person.name.middle !== 'undefined')
			return person.name.first + ' ' + person.name.middle + ' ' + person.name.last;
		else
			return person.name.first + ' ' + person.name.last;

	});
}
console.log("//--------------- Full Name ---------------  // ");

console.log(fullName(people));



/*
2. Given the function abs that computes the absolute value, finish the invocation of map that should compute the absolute value of each number in its array argument.
  
HINT: To test this, it may be easiest to paste all of the above into a console.
*/

function abs(x) {
	if (x >= 0) {
		return x;
	}
	return -x;
}

console.log(map([1, -2, 37, -100, -8, 5], function(element) {
	return abs(element);
}));
// => [1, 2, 37, 100, 8,



/*
3. We're going to write a function maximums that, given an array of arrays of numbers as an argument, returns a new array containing the maximum number of each inner array. That's a bit of a mouthful, so let's break it down:
   // our argument would look like this:
   */
var sampleInput = [ // it's an array
	[1, 3, 2], // of arrays of numbers
	[4, 23, 100],
	[7, 6, 3, -2]
];
// and we want to be able to use maximums to do this:
maximums(sampleInput); // => [3, 100, 7]
/*
 Part One: Let's start by writing a function max that, when given an array of numbers computes the maximum number in that array. You will want to use each for this.
 */
function max(numbers) {
	// YOUR CODE HERE
	var max = numbers[0];
	each(numbers, function(element) {
		if (max < element)
			max = element;
	});
	return max;
}
console.log(max([1, 3, 2])); // => 3
console.log(max([4, 23, 100])); // => 100
/*
Part Two: Now that you have a function that computes the the maximum number in an array of numbers, use map to transform each array in the sampleInput into its maximum by completing the maximums function:
*/
function maximums(arrays) {
	return map(arrays, function(element) {
		return max(element);
	});
}

console.log(maximums(sampleInput));



/*
More Practice
1. Complete the function exponentials that accepts an array of numbers as a parameter, and raises each number n to the nth power, e.g:
  */
function exponentials(numbers) {
	// YOUR CODE HERE
	return map(numbers, function(element) {
		return Math.pow(element, element);
	});
}
console.log(exponentials([1, 2, 3, 4])); // => [1, 2*2, 3*3*3, 4*4*4*4] => [1, 4, 27, 256]
console.log(exponentials([3, 2, 5])); // => [27, 4, 3125]



/*
2. First, write a function reverse that accepts a string as a parameter and returns a reversed version of that string (you'll want to use a for loop for this). Then, use reverse to write a function called reverseWords that accepts a string as an argument, and returns a string with all of its words reversed. You'll want to use split and join in both of these functions.
*/
"hello".split(""); // => ["h", "e", "l", "l", "o"]
["h", "e", "l", "l", "o"].join(""); // => "hello"
"hello world".split(" "); // => ["hello", "world"]
["hello", "world"].join(" "); // => "hello world"

// Note that reverseWords should reverse each word individually, not the entire string.
console.log("//--------------- reverseWords ---------------  // ");

function reversWord(word) {
	return word.split("").reverse().join("");
}

function reverseWords(string) {
	var arr = string.split(" ");
	return map(arr, function(element) {
		console.log(element);
		return reversWord(element);
	});
}

console.log(reverseWords("hello world")); // => "olleh dlrow"
console.log("//--------------- reverseWords ---------------  // ");


/*
3. We often want to transform an array of objects by looking up the value found under a specific key in each object; for instance, consider the problem of finding the ages of all the people in the people array like we did in the first exercise:
*/
var people = [
	{name: {first: "Grace", middle: "B.", last: "Hopper"}, age: 85},
    {name: {first: "Adele", last: "Goldstine"}, age: 43},
    {name: {first: "Ada", last: "Lovelace"}, age: 36},
    {name: {first: "Hedy", middle: "E.", last: "Lamarr"}, age: 85},
    {name: {first: "Ruchi", last: "Sanghvi"}, age: 34}
  ];
function ages(people) {
    return map(people, function(person) {
    	return person.age;
    });
}
 /*
Write a function called pluck that takes an array of objects and a string representing a key as parameters, and returns an array of all the values found under each object using the key, e.g.:
*/
 pluck(people, "age"); // => [85, 43, 36, 85, 34]
 /*
Your implementation should use map.
Let's say that we have a string representing a CSV (comma-separated values) file that looks like this:
   "Grace,B.,Hopper,85\nAdele,Goldstine,43\nAda,Lovelace,36\nHedy,E.,Lamarr,85\nRuchi,Sanghvi,34\n"
 
And we want to parse it into an array people objects like we showed in the warmup, e.g.:
*/
var people = [
	{name: {first: "Grace", middle: "B.", last: "Hopper"}, age: 85},
    {name: {first: "Adele", last: "Goldstine"}, age: 43},
    {name: {first: "Ada", last: "Lovelace"}, age: 36},
    {name: {first: "Hedy", middle: "E.", last: "Lamarr"}, age: 85},
    {name: {first: "Ruchi", last: "Sanghvi"}, age: 34}
    ];
 /*
Using map and split, write a function parseCSV that accepts a CSV string as a parameter and outputs an array of people objects with the exact format as shown above.
*/