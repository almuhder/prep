// Kata 6
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solutions(str) {

  var arr = str.split('');
  if (str.length % 2 !== 0) {
    arr.push('_');
  }

  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (i + 1 < arr.length)
      arr2.push(arr[i] + arr[i + 1]);
    i++;
  }
  return arr2
}


console.log(solutions('abcdef'));

// -------------------------------------------------- //

// Kata 4
/*In order to stop too much communication from happening, your overlords declare that you are no longer allowed to use certain functionality in your code!

Disallowed functionality:

Strings
Numbers
Regular Expressions
Functions named “Hello”, “World”, “HelloWorld” or anything similar.
Object keys named “Hello”, “World”, “HelloWorld” or anything similar.
Without using the above, output the string “Hello World!” to prove that there is always a way.*/

var helloWorld = function() {

  var arr = [];
  var zero = arr.length;
  var one = ++arr.length;
  var two = one + one;
  var ten = two * two * two + two;
  var chars = {};
  chars.a = (two + two + two + one) * ten + two //H
  chars.b = ten * ten + one //e
  chars.c = ten * ten + two * two * two //l
  chars.d = ten * ten + two * two * two //l
  chars.e = ten * ten + two * two * two + two + one //o
  chars.s = ten * (two + one) + two // whitespace
  chars.f = (two * two * two) * ten + two + two + two + one //W
  chars.g = ten * ten + two * two * two + two + one //o
  chars.h = (ten + two) * ten - two * (two + one) //r
  chars.j = ten * ten + two * two * two //l
  chars.k = ten * ten //d
  chars.eq = (ten * (two + one)) + (two + one); //!

  var letters = [];
  //console.log(Object.keys(chars));
  for (var key in chars) {
    letters.push(String.fromCharCode(chars[key]));
  }

  return letters.join((typeof zero).slice(two + two + two));
}


// -------------------------------------------------- //

// Kata 6
// Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

// If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".


balance("!!", "??") //=== "Right"
balance("!??", "?!!") // === "Left"
balance("!?!!", "?!?") // === "Left"
balance("!!???!????", "??!!?!!!!!!!") //  === "Balance"

function balance(left, right) {
  //coding and coding....
  var str1CountQues = 0;
  var str2CountQues = 0;

  var str1CountEqes = 0;
  var str2CountEqes = 0;

  var str1Arr = left.split('');
  var str2Arr = right.split('');

  for (var i = 0; i < str1Arr.length; i++) {
    if (str1Arr[i] === '!')
      str1CountEqes++;
    if (str1Arr[i] === '?')
      str1CountQues++;
  }

  for (var i = 0; i < str2Arr.length; i++) {
    if (str2Arr[i] === '!')
      str2CountEqes++;
    if (str2Arr[i] === '?')
      str2CountQues++;
  }
  var str1Total = (str1CountQues * 3) + (str1CountEqes * 2);
  var str2Total = (str2CountQues * 3) + (str2CountEqes * 2);
  if (str1Total === str2Total) {
    return "Balance";
  } else if (str1Total > str2Total) {
    return "Left";
  } else if (str1Total < str2Total) {
    return "Right";
  }

}

console.log(balance("!!???!????", "??!!?!!!!!!!"));

// -------------------------------------------------- //



// Kata 7
// Write funcion lenR which returns the length of a given list. Try no to cheat and provide recursive solution.
function lenR(x, count = 0) {
  //return x.length
  if (!x[count]) return count;
  count++;
  return lenR(x, count);
}

// -------------------------------------------------- //

// Kata 6 : https://www.codewars.com/kata/expressive-objects/javascript

// Write function evaluate(left, op, right) that given two operands (left and right) and an operator (op), will evaluate and return the result.

// For example:

var left = {
  'multiply': {
    'add': [1, 2, 3, 4, 5],
    'subtract': [5, 6, 7, 8, 9],
    'multiply': [1, 2, 3, 4, 5],
    'divide': [1, 2, 3, 4, 5]
  }
};
// You will reduce each array based on its key. So you will start of with add(ing) [1,2,3,4,5] => 15
// then subtract(ing) [5, 6, 7, 8, 9] => -25 etc. Once all arrays have been reduced, you will perform the
// root key operation on all the reduced arrays. So in this case, you will multiply each reduced array with
// each other. The order is ALWAYS value of 'add' key first, then 'subtract', then 'multiply' and finally 
// 'divide'.
var right = {
  'subtract': {
    'add': [1, 2, 3, 4, 5],
    'subtract': [1, 2, 3, 4, 5],
    'multiply': [1, 2, 3, 4, 5],
    'divide': [1, 2, 3, 4, 5]
  }
};
// evaluate(left, 'add', right) === -467.0083333333333
function evaluate(left, op, right) {
  // get the first key of an object
  var lKey1 = Object.keys(left)[0];

  console.log("lKey1: " + lKey1);
  console.log(left[lKey1.toString()]['add']);
  var lAddArr = left[lKey1.toString()]['add'];
  var lSumValue = lAddArr.reduce(function(sum, value) {
    return sum + value;
  }, 0);
  console.log(lSumValue);

  var lSubValue = left[lKey1.toString()]['subtract'].reduce(function(sub, value) {
    return value - sub;
  }, 0);
  console.log(lSubValue);


}


console.log(evaluate(left, 'add', right))



// Kata 6 : https://www.codewars.com/kata/coding-meetup-number-9-higher-order-functions-series-is-the-meetup-age-diverse

// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.

// For example, given the following input array:

var list1 = [{
  firstName: 'Harry',
  lastName: 'K.',
  country: 'Brazil',
  continent: 'Americas',
  age: 19,
  language: 'Python'
}, {
  firstName: 'Kseniya',
  lastName: 'T.',
  country: 'Belarus',
  continent: 'Europe',
  age: 29,
  language: 'JavaScript'
}, {
  firstName: 'Jing',
  lastName: 'X.',
  country: 'China',
  continent: 'Asia',
  age: 39,
  language: 'Ruby'
}, {
  firstName: 'Noa',
  lastName: 'A.',
  country: 'Israel',
  continent: 'Asia',
  age: 40,
  language: 'Ruby'
}, {
  firstName: 'Andrei',
  lastName: 'E.',
  country: 'Romania',
  continent: 'Europe',
  age: 59,
  language: 'C'
}, {
  firstName: 'Maria',
  lastName: 'S.',
  country: 'Peru',
  continent: 'Americas',
  age: 60,
  language: 'C'
}, {
  firstName: 'Lukas',
  lastName: 'X.',
  country: 'Croatia',
  continent: 'Europe',
  age: 75,
  language: 'Python'
}, {
  firstName: 'Chloe',
  lastName: 'K.',
  country: 'Guernsey',
  continent: 'Europe',
  age: 88,
  language: 'Ruby'
}, {
  firstName: 'Viktoria',
  lastName: 'W.',
  country: 'Bulgaria',
  continent: 'Europe',
  age: 98,
  language: 'PHP'
}, {
  firstName: 'Piotr',
  lastName: 'B.',
  country: 'Poland',
  continent: 'Europe',
  age: 128,
  language: 'JavaScript'
}];
// your function should return true as there is at least one developer from each age group.

// Notes:
// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer up to 199.