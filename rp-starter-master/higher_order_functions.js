// ------- Higher Order Functions ------- //
// Functions as Values
function double(x) {
	return x * 2;
}
var triple = function(x) {
	return x * 3;
}
function doYourWork(x, func) {
	return func(x);
}
console.log(doYourWork(2, triple));
console.log(doYourWork(3, function() {
	return "Squre: " + 3 * 3;
}));
// HOF : Higher Order Functions
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
var product = 1;
function each(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}
each(numbers, addNumbers);
function addNumbers(number) {
	sum = sum + number;
}
function multiply(number) {
	product = product * number;
}

// function each(array, func){
//    for ( var i =0 ; i < array.length; i++){
//       func(array[i]);
//    }
// }
each(numbers, multiply);
console.log("Hello world");

// it will return object in both cases for object and array
console.log(typeof [1,2,3]);
console.log(typeof {});
console.log(Array.isArray([1,2,3]));
console.log(Array.isArray({'a':'1'}));
