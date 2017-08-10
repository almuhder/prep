/*
1. Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:
function sum(n) {
  // TODO: your code here
}
sum(3); // => 6
sum(4); // => 10
sum(5); // => 15
*/
function sum(n){
  var count = 0; 
  var sum = 0 ; 
  while (count <= n ){
    sum = count+sum;
    count++;
  }
  return sum;
}
/*
2. Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.:
function factorial(n) {
  // TODO: your code here
}
factorial(3); // => 6
factorial(4); // => 24
factorial(5); // => 120
*/


function factorial2(n){
  var count = 1; 
  var sum = 1 ; 
  while (count <= n ){
    sum = count*sum;
    count++;
  }
  return sum;
}


/* 
3. Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string s should be repeated, e.g.
function repeatString(str, count) {
            // TODO: your code here
          }
          repeatString('dog', 0); // => ''
          repeatString('dog', 1); // => 'dog'
          repeatString('dog', 2); // => 'dogdog'
          repeatString('dog', 3); // => 'dogdogdog'
Your task is to implement the repeatString function using a while loop.
*/
function repeatString(str,n){
  var count = 1; 
  var sum = ""; 
  while (count <= n ){
    sum = str + sum;
    count++;
  }
  return sum;
}
// 

function prime2(m){
  var counter = 0;
  var result = "";
  while (counter < m ){
    if ( m === 1 || m === 2 || m === 3 || m === 5){
      result += m + ',';
    }else{
      if ( (m %2)!== 0 || (m %3)!== 0 || (m %5)!== 0  ){
        result += m; 
      }
    }
    counter++ ;
    m--;
  }
  return result;
    // var gh = m;
    // var result = "";
    // while (gh>2){
    //     var count = 2
    //     while(count<gh){
    //         if(gh%count!==0){
    //             result = result +  "," +gh + ","
    //
    //         }
    //         count = count + 1;
    //     }
    //     gh = gh - 1;
    // }
    // return result ;
 }


function isPrime(n){
  var count = n;
  var counter = 2 ;
  var result = "";
  while( count < n ){
    while(counter< count){
      if(count % counter!== 0 ){
          result = result + ',';
      }
      counter ++ ;
    }

    count --;
  }

  return result;
}






/*
1. Write a javascript function to find the sum of first and last digit of any number.
without convert it to string
firstAndLast(456) ==> 4 + 6 = 11
firstAndLast(123) ==> 1 + 3 = 4
firstAndLast(197) ==> 1 + 7 = 8
*/

// function  firstAndLast(n){
//   var f, l = 0;
//   while(count_digit(n) > coun){
//     while ()
//       n = n - (n % 10);
//       n = n / 10;
//     }
//
//   }
//   return f + l;
// }

function count_digit(x){
  var count = 0;
  while ( x >= 1){
    x = x / 10;
    count++;
  }
  return count;
}




  function drawStar(){
    // we need to loops
    // one for rows ( will be incremented by one)
    // secone loops for the drawing the '*'

    var rows = 1;
    var starts = 1;
  	var flag = false;
    while(rows <= 9){
        console.log('*');
      while(starts < rows){
        console.log('*');
        starts++
  		}
      rows++
      //console.log('*');
    }
  }
