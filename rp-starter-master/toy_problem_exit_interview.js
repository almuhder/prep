// 1. write function called  getLastOdd that accept an array of numbers and return the last odd number in the array, if there's no odd number it will return undefined.
function getLastOdd(numbers) {

}
getLastOdd([1, 2, 3, 4, 5, 6, 7, 11, 100]) // 11
getLastOdd([2, 4, 6, 8, 10]) // undefined

// 2. Write a function called getLongestEvenWord that accepts an array of strings and return the longest word length with the even length
function getLongestEvenWord(strings) {

}
getLongestEvenWord(['majd', 'ahmad', 'saher', 'maher', 'fatima']) // => "fatima

// 3. Write a function called getLongestWithLetter that accepts an array of strings as parameter and return the getLongestWithLetter word that begin with 'a' letter
function getLongestWithLetter(strings) {

}
getLongestWithLetter(['majd', 'ahmad', 'saher', 'maher', 'fatima']) // => "Ahmad

// 4. Write a function called getWords that accepts an array of strings as parameter and a number. The function must return words which it's length are greater that this number.
function getWords(strings, n) {

}
getWords(['a', 'ab', 'abc', 'abcd', 'abcde'], 3) // => ['abcd','abcde']

// 5. Write function called CubeMyNubers that accepts an object as parameter and return an object after cubing their numeric values, the string values will stay the same.
function CubeMyNubers(obj) {

}
CubeMyNubers({
    a: 1,
    b: 2,
    c: 3
}); // {a:1, b:8, c:27}
CubeMyNubers({
    name: 'MajdEddin',
    month: 8
}); // {name:"MajdEddin", month:512}


// 5. Write a function called squareToN that accept a number as parameter and return an array with the squared number from 1 to n. If n is smaller that 0 it will return "Vailed only for positive numbers!"

function squareToN(n) {

}
squareToN(5); //[1,4,9,16,25]
squareToN(-1); // "Vailed only for positive numbers";


// 6. Write a function called getAvgOfEven that accepts an array of number as parameter and return the average of even numbers only.
function getAvgOfEven(numbers) {

}

getAvgOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Evens 2,4,6,8,10 the return value will be (2+4+6+8+10= 30/5)= 6

// 7. Write a function called replaceMeIfYouCan that accepts an array of strings as parameter and return and new array after replaceing these symbols (!,?,_,-,.) with *
function replaceMeIfYouCan(strings) {

}

replaceMeIfYouCan(['he.is.great', '!love Javascript?']); //['he*is*great', '*love Javascript*']


// 8. Write a function called oddPositiveEvenAbs that accepts an array of numbers and return a new array as the following:
// - the odd number must be at the beginning of the array and even number at the end
// - the new array must be without Zeros
// - we accepts only the odd positive numbers and for the evens if it's negative convert it into positive

function oddPositiveEvenAbs(numbers) {

}

oddPositiveEvenAbs([-2, 0, 1, 2, 4, -6, -3, 5, 9]); //  [1, 5, 9, 2, 2, 6]
oddPositiveEvenAbs([-12, 0, 12, 22, 0, -6, -13, 15, 49]); //  [15, 49, 12, 12, 6]


// 9. Write a function called priceInJordan that accept a price and boolean value represent the service if it applicable or not as parameters and the calculate the value as the following the tax amount: 16% and the service amount: 10%

function priceInJordan(price, flag) {

}

priceInJordan(5, true); // 6.3
priceInJordan(5, false); // 5.6


// 10. Write a function called getAvgAges that accpets three parameters ( array of numbers, young and old) as parameters and return the average ages for the people who are between the two ages (young , old) only.

function getAvgAges(ages, young, old) {

}
getAvgAges([10, 16, 18, 19, 55, 24, 67, 33, 86], 18, 55); //[18,19,55,24,33]/5 ==> 29.8



// 11. Write a function called  averageAge that accpets an array of objects and return the average ages for the people how are between 18 and 50


var people = [{
    name: {
        first: 'Ahmad',
        middle: 'B.',
        last: 'AlAhmad'
    },
    age: 85
}, {
    name: {
        first: 'Amer',
        last: 'MHD'
    },
    age: 43
}, {
    name: {
        first: 'Aya',
        last: 'Sultan'
    },
    age: 36
}, {
    name: {
        first: 'Hadeel',
        middle: 'E.',
        last: 'Lami'
    },
    age: 44
}, {
    name: {
        first: 'Hadeel',
        middle: 'E.',
        last: 'Lami'
    },
    age: 54
}, {
    name: {
        first: 'Lina',
        last: 'MHD'
    },
    age: 14
}, {
    name: {
        first: 'Obada',
        last: 'Eddin'
    },
    age: 24
}];

function averageAge(people) {
    // YOUR CODE HERE
}

averageAge(people); // 43+36+44+24 = 36.74
