// Basic Requirments

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
 
function map(coll, f) {
    var acc = [];
    if (!Array.isArray(coll)) {
        acc = {};
    }
    each(coll, function(element, key) {
    acc[key] = f(element, key);
    });
    return acc;
}

var people = [
	{name: {first: "Grace", middle: "B.", last: "Hopper"}, age: 85},
    {name: {first: "Adele", last: "Goldstine"}, age: 43},
    {name: {first: "Ada", last: "Lovelace"}, age: 36},
    {name: {first: "Hedy", middle: "E.", last: "Lamarr"}, age: 85},
    {name: {first: "Ruchi", last: "Sanghvi"}, age: 34}
  ];


// 1.The incrementValues function from yesterday can be written much more elegantly using map. Rewrite that function using our new and improved version of map. For convenience, the prompt is reproduced below:
// Write a function called incrementValues that accepts an object as a parameter, and outputs an object with all of its numeric values incremented by one. You'll want to use the updated version of map for this, and you will need to check the type of each value to determine whether or not it should be incremented.

function incrementValues(object){
	return map(object, function(element, key){
		if(typeof element === 'number')
			return element + 1;
		return element
	});
}
console.log(incrementValues(people));

// console.log(incrementValues(people));


// 2.Write a function called uppercaseValues that, given an object as a parameter, returns a new object with all of its string values converted to uppercase. You'll want to make use of .toUpperCase() for this:

 'hello'.toUpperCase(); // => 'HELLO'
// Also, ensure that you only attempt to convert strings to uppercase -- you may want to use typeof for this.


// 3.Write a function called countNestedKeys that, given an object where all values are also objects, returns an object that contains the count of keys in each nested object, e.g.

 function countNestedKeys(object) { 
       // TODO: Your code here 
 } 
 // countNestedKeys({a: {b: 1, c: 7}, f: {h: 22, g: 12, i: 24}}); 
 // => {a: 2, f: 3}




 // 4. Write a function called agesToMinutes that, accepts an object as parameter and return an object after converting the ages from years to minutes 


 var people = [{
	name: {
		first: "Majd",
		middle: "Eddin",
	},
	age: 30
}, {
	name: {
		first: "Fatima",
		last: "Hammai"
	},
	age: 26
}, {
	name: {
		first: "Sahar",
		middle: "MHD"
	},
	age: 19
}, {
	name: {
		first: "Nour",
		middle: "Eddin",
	},
	age: 15
}, {
	name: {
		first: "Ahmad",
		last: "Awad"
	},
	age: 33
}]; 


function agesToMinutes(object){
	// To-Do code .. 
}

// agesToMinutes(people); 


// More practices : 
// 5. You're working in a company for securing solutions, one of your clients noticed that their system has been hacked many times. When you analyzed the system! You noticed that the password criteria not set at all. 
// You were asked to check the for the users' account and flag and give useful information for each one. If the password is less that 8 characters you add a flag property for the object with a false value, else it will be true. You'll add another property called passwordHealth it will be either (weak, normal or strong) according to this criteria: 
// 	Weak password: only small letters
// 	Normal password: small and numbers
// 	strong password: small, capital, numbers and symbols.


// Hint: Using Regular Expressions will make your life easier :)

var usersData = [
	{ user: {email: 'majd@rbk.org', password: "_majd(2017)"}},
	{ user: {email: 'fatema@rbk.org', password: "12345"}},
	{ user: {email: 'maher@rbk.org', password: "M@her2017"}},
	{ user: {email: 'sahar@rbk.org', password: "saher2017"}}
];


function securityCheck(object){

}


// securityCheck(usersData); // == >
// [
// 	{ user: {email: 'majd@rbk.org', password: "_majd(2017)", flag: true, passwordHealth: "normal"}},
// 	{ user: {email: 'fatema@rbk.org', password: "12345", flag: false, passwordHealth: "weak"}},
// 	{ user: {email: 'maher@rbk.org', password: "M@her2017", flag: true, passwordHealth: "strong"}},
// 	{ user: {email: 'sahar@rbk.org', password: "saher2017", flag: false, passwordHealth: "normal"}}
// ];

