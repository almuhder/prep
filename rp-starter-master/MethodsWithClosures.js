function makeAccount1(initialVal) {
    var balance = initialVal;
    return {
        withdraw: function(amount) {
            if (balance - amount >= 0) {
                balance -= amount;
                return "Here's your new balance $" + balance +
                    "\n Here's the amount $" + amount;
            } else {
                return "Sorry! Not Enough Money!"
            }
        },
        deposit: function(amount) {
            balance += amount;
            return "you have added $" + amount + "\n Your new balance is " +
                balance;
        }
    };
}


// Basic Requirements
// 1. Modify the makeAccount function from the lecture so that the returned object contains an additional key called checkBalance, the value of which is a function that takes no arguments and returns a string representing the current balance. You should be able to use it like this:
var account = makeAccount(100);
account.checkBalance(); // => "Your balance is: $100"
account.deposit(50);
account.checkBalance(); // => "Your balance is: $150"

function makeAccount(initialVal) {
    var balance = initialVal;
    return {
        withdraw: function(amount) {
            if (balance - amount >= 0) {
                balance -= amount;
                return "Here's your new balance $" + balance +
                    "\n Here's the amount $" + amount;
            } else {
                return "Sorry! Not Enough Money!"
            }
        },
        deposit: function(amount) {
            balance += amount;
            return "you have added $" + amount + "\n Your new balance is " +
                balance;
        },
        checkBalance: function() {
            return "Your balance is $" + balance;
        }
    };
}


// 2.  Let's revisit the counter exercise. Currently, makeCounter only allows us to count up -- what if we want to count down too? Modify makeCounter so that it returns an object that contains two keys: up and down, each of which have functions as values. up should make the count increase, and down should make the count decrease:
function makeCounter(initialVal) {
    var count = initialVal;
    return {
        up: function() {
            count++;
            return count;
        },
        down: function() {
            count--;
            return count;
        },
        reset: function() {
            count = initialVal;
            return count;
        }
    };
}
var counter = makeCounter(0);
console.log(counter.up()); // => 1
console.log(counter.up()); // => 2
console.log(counter.down()); // => 1
console.log(counter.down()); // => 0


// 3. Give your counter a reset capability as well, that resets the count back to its initial value.
var counter2 = makeCounter(5);
counter2.up(); // => 6
counter2.up(); // => 7
console.log(counter2.reset()); // => 5


// -------------------------------------------------------------- //
//                        More Practice                           //
// -------------------------------------------------------------- //
// Closures
// Remember the guessing game from the first week? When we wrote the first version of the game, we didn't know about closures and stored all of our state (variables) in the global scope. Rewrite the guessing game to take advantage of closures so that you can create multiple games. Here is some starter code:
// function randInt(n) {
//   return Math.floor(Math.random() * (n + 1));
// }
//
// var upperBound = 5;
//
// function guessMyNumber(n) {
//   if (n > upperBound) {
//     return "Out of bounds! Please try a number between 0 and " + upperBound +
//       ".";
//   } else if (n === randInt(upperBound)) {
//     return "You guessed my number!";
//   }
//   return "Nope! That wasn't it!";
// }

// You will need to define a
// function makeGame, and at the minimum, you should be able to play the game like this:
function makeGame(initial) {
    var count = 0;
    var upperBound = initial;
    var num = Math.floor(Math.random() * (initial + 1))
    return {
        guessMyNumber: function(n) {
            count++;
            if (n > upperBound) {
                return "Out of bounds! Please try a number between 0 and " +
                    upperBound + ".";
            } else if (n === num) {
                return "You guessed my number!";
            }
            return "Nope! That wasn't it!";
        },
        giveUp: function() {
            return "HAHAHA good luck! Number was : " + num;
        },
        numGuesses: function() {
            return " You have tried " + count + " times";
        }
    };
}
// var game = makeGame(10); // 10 is the upper bound
// game(2); // => "Nope! That wasn't it!"
// game(7); // => "Nope! That wasn't it!"
// game(5); // => "You guessed my number!"

// Ways to improve the game include:
// - A way to "give up" and have the game reset, e.g.game.giveUp().
// - Keep track of how many guesses have been made, and provide a way to access them, e.g.game.numGuesses().
// - See the original exercisefor the rest of the improvements!



// -------------------------------------------------------------- //
//                  Warm Up :  Methods with Closures              //
// -------------------------------------------------------------- //

//
// Write a function called globalChecker that accpets an array of numbers as input and return an object with the following functions:
// - isEven: return true if all the numbers in the array are even otherwise return false
// - isOdd: return true if all the numbers in the array are odd otherwise return false
// - isPositive: return true if all the numbers are positives otherwise return false
// - getSum: return the sum of the whole array's numbers
// - product : return a product for the the whole array's numbers
// - doubleAll: will return a new array after doubling each element.

// Note: You need to use Higher Order Functions (Map,Reduce) and each, can you write the code on your own from scratch?

function globalChecker(array) {

}
var checkMe = globalChecker([1, 2, 3, 4, 5]);
checkMe.isEven(); // return false
checkMe.isOdd(); // return false
checkMe.isPositive(); // return true
checkMe.getSum(); // return 15
checkMe.product(); //return 120
checkMe.doubleAll(); // [1,4,6,8,10]

var checkMe2 = globalChecker([-2, 4, 22, 40, 50]);
checkMe2.isEven(); // return true
checkMe2.isOdd(); // return false
checkMe2.isPositive(); // return false
checkMe2.getSum(); // return 114
checkMe2.product(); //return -352000
checkMe2.doubleAll(); // [-4,8,44,80,100]
