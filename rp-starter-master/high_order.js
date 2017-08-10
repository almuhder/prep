// Iterating Over Arrays Using each
// 1. Write each as seen below in your main.js file.

var numbers = [1,2,3,4,5];
var total = 0;

function each(array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i]);
    }
}

function sumSquares(number) {
    total  = total +  (number * number);
 }

console.log("sumSquares: " + each(numbers, sumSquares));


function sumTotal(number) {
    total  = total +  number;
 }




// 6. Write a function called odds that accepts an array as a 
// parameter and returns an array of just the odd numbers. 
// If you wrote it using each, great! If you used anything else, 
// refactor it to use a for loop.

var arr = [];
function odds(item){
	if (item %2 !== 0 )
		arr.push(item);
	return arr ; 
}

each(numbers, odds);



// More Practice
// Summations
// 1. Write a function sumByAllElementsMultipliedByFour that takes an array as an argument and returns the sum of all elements multiplied by four.

function sumByAllElementsMultipliedByFour(array){
	 var sum1 = 0;
	 each( array, function(num){
	 	return sum1 = sum1 + num * 4; 
	 });
	 return sum1; 
}





function sumBy(array, func){
	var result = 0 ; 
	each(array, function(value){
			result = result + func(value); 
	});
	return result; 
}

function square(x){
	return x * x; 
}





// --------------------------------- //
// var numbers = [1,9,27,10,5,13];
// var sum = 0 ; 
// var product = 1; 
// var max  = numbers[0];

// // for ( var i =0 ; i < numbers.length ; i++){
// //   sum = sum + numbers[i];
// // }

// // for ( var i =0 ; i < numbers.length ; i++){
// //   sum = sum * numbers[i];
// // }

// // for ( var i =0 ; i < numbers.length ; i++){
// //   if ( numbers[i] > max)
// //    max =  numbers[i];
// // }

// var addSum = function (number){
//     sum = sum + number;
// }

// function each(array, func){
//   for ( var i = 0 ; i < array.length ; i++){
//       func(array[i]);
//   }
//   return sum; 
// }

// each([1,2,3,4], function (number){
// product = product * number;
// });
// //each(numbers, addSum);