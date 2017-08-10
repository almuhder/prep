// function each(coll, f) {
//   if (Array.isArray(coll)) {
//     for (var i = 0; i < coll.length; i++) {
//       f(coll[i], i);
//     }
//   } else {
//     for (var key in coll) {
//       f(coll[key], key);
//     }
//   }
// }


// function makeAccount(initial) {
// var balance = initial;
//
//   return function(amount) {
//     if (balance - amount >= 0) {
//       balance = balance - amount;
//       return 'here is your money $' + amount;
//     } else {
//       return 'insufficient funds';
//     }
//   };
// }

function makeAccount(initail) {
  var balance = initail;
  return function(value) {
    if (balance - value >= 0) {
      balance -= value;
      return "Your new balance is $" + balance + " here's your money$" +
        value;
    } else {
      return "insufficient funds!!"
    }
  };
}


// console.log(makeAccount(20));
var account = makeAccount(500);
console.log(account(300));
console.log(account(200));
console.log(account(200));

function counter(initail) {
  var count = initail;
  return function() {
    count++;
    return count;
  };
}
var count1 = counter(20);
console.log("Count: " + count1());
console.log("Count: " + count1());
// console.log(counter(2)());
// console.log(counter(4)());
/*
  // ------------------------------------------//
  // 1. Let's make a counter using closures. For our purposes, a counter is simply a function that, when invoked, returns a number that is one higher than it used to be. For example, this is the behavior that we want:

  counter(); // => 1
  counter(); // => 2
  counter(); // => 3
  // We could implement this using the global scope like this:
  var count = 0;

  function counter() {
    count = count + 1;
    return count;
  }
  // But now that we know about closures, we can do something way cooler. Finish the implementation of makeCounter below so that we can make multiple counters, each with their own internal count using closures.
  function makeCounter() {
    // YOUR CODE HERE
    var count = 0;
    return function() {
      return ++count;
    };
  }
  var counter1 = makeCounter();
  var counter2 = makeCounter();
  console.log(counter1()); // => 1
  console.log(counter1()); // => 2
  console.log(counter2()); // => 1
  console.log(counter1()); // => 3
  console.log(counter2()); // => 2



  var counter3 = makeCounter();
  var counter4 = makeCounter();

  console.log(counter3());
  console.log(counter4());

  // ------------------------------------------ //

  // 2. Update makeCounter so that, instead of always starting from zero, you can start from any number, e.g.:


  function makeCounter1(initial) {
    // YOUR CODE HERE
    var count = initial;
    return function() {
      return ++count;
    };
  }

  var counter3 = makeCounter1(100);
  console.log(counter3()); // => 101;


  // ------------------------------------------//


  // 3. One way we can use closures is as functions that construct other functions. Consider the numerous examples of exponentiation functions that we've created, e.g. square and cube. The following function pow is incomplete:
  function pow(exponent) {
    return function(base) {
      return Math.pow(base, exponent);
    }
  }
  // Fill in the ??? so that it works like this:
  var square = pow(2);
  var cube = pow(3);
  var power4 = pow(4);

  console.log(square(5)); // => 25
  console.log(cube(3)); // => 27
  console.log(power4(4)); // => 256

  // ------------------------------------------//

  //                More Practice              //

  // ------------------------------------------//
  // 1. zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
  // The function value is one new array.
  // If the arrays are of unequal length, the output will only be as long as the shorter one.
  // (Values of the longer array are simply not used.)
  // Inputs should not be modified.
  // zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]) // =>  [1,10,100,1000]
  // zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]) // =>  [4,7,7,4,7,7]

  zipWith(function(a, b) {
    return a + b;
  }, [0, 1, 2, 3], [0, 1, 2, 3]); //  =>  [0,2,4,6]  // Both forms are valid.


  // zipWith((a, b)) // => a + b, [0, 1, 2, 3], [0, 1, 2, 3]) //  =>  [0,2,4,6]  Both are functions.v

  function zipWith(f, arr1, arr2) {
    var result = [];
    // each(arr1, i){
    //   result.push(f(a,b));
    // };
    return result;
  }

  console.log(zipWith(function(a, b) {
    return a + b;

  }, [1, 2, 3, 4], [4, 3, 2, 1]));
  // ----------------------------------------- //


  //2. We want to create a function that will add numbers together when called in succession.

  /*function add(init){
    var num = init;
    return function(){

    }
  }

  add(1)(2)(); // returns 3
  // We also want to be able to continue to add numbers to our chain.
  add(1)(2)(3)();       // 6
  add(1)(2)(3)(4)();    // 10
  add(1)(2)(3)(4)(5)(); // 15
  // and so on.
  // A single call should return the number passed in.
  add(1)();             // 1
  // and we should be able to store the result and reuse it.
  var addTwo = add(2)();
  addTwo;        // 2
  addTwo + 5;    // 7
  addTwo(3)();     // 5
  addTwo(3)(5)();  // 10
  */
