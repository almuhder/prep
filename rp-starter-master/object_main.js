// Objects



/*
Syntax & Style
Fix the syntax & style issues with the three objects below:
    {firstName "Yan", lastname: "Fan" }
    {a: 1, b:2 c: 3 d 4}
    {
       animal: "dog"
       noise: "bark",
       age: 3,
       type "Golden Retriever"
       color: "Yellow",
    }

*/
var x= {
  'firstName': "Yan", 
  'lastname' : "Fan" 
}

var x1 ={
  'a': 1, 
  'b': 2,
  'c': 3,
  'd': 4
}
var x2 = {
       'animal': "dog",
       'noise' : "bark",
       'age'   : 3,
       'type'  : "Golden Retriever",
       'color' : "Yellow"
}
/*
Creating Objects
1. Create an object that represents you. It should contain your first name, last name, age and hometown. Assign it to a variable called person.
*/
var person = {
  'first'  : 'Majd Eddin', 
  'last'  : 'AlMuhder',
  'age'   : 30,
  'town'  : 'Damascus',
  'major' : 'software engineering',
  'gender': 'Male'
};

for ( var a in person){
  console.log(person[a]);
}
/*
2. Add three more key/value pairs to your object that represent other attributes of yourself. Ideas include (but are not limited to):
Favorite TV Shows/Movies/Sports/Activities etc.
Family
Date of Birth
Place of Birth
*/
person['dateOfBirth'] = '4/4/1986';
person['tvShow'] = 'Artigril';
person['sport'] = 'swimming';
/*
3. Change your object to have a single name key, the value of which is an object – this object should have first, last and middle keys containing your first, last, and middle names respectively.
*/

person.fullname = person.first + ' ' + person.last; // or person['fullname']
/*
4. Look up something you want to buy on souq.com, and make an object that represents information about the item:
- Item Name
- Category/Type
- Year released
- Rating
- Price
*/
var item = {
  'name' : 'samsung gear s3',
  'category' : 'electrical',
  'year' : 2016,
  'rating' : '4 stars',
  'price' : '350$'
};
/*
Creating New Key/Value Pairs
Perform this exercise in a console!
1. Create a new empty object in your console called obj like this:
var obj = {};
 
 */
var obj = {};
 /*
}
2. Add a new key/value pair to the object obj by assigning a new value to a new key like so:
obj.hello = "world";
obj["number"] = 25;
 */

obj.hello  = "world"; 
obj["number"] = 25;
 /*
3. Now, check the value of obj in the console and ensure that it has the two key/value pairs added above. This is how we create new key/value pairs in existing objects.
*/
obj.hello;
obj.number;
 /*
4. In the console attached to your main.js file, add a favoriteColor key/value pair to the object that represents you.
*/
person.favoriteColor = 'Blue';

/*
Accessing Values by Key
1. Fix the attempts to access values in the person object:
var key = "name";
var woman = {
     name: "Grace Hopper",
     age: 85,
      occupation: "computer scientist"
};
woman[age]; // => 85
woman.key; // => "Grace Hopper"
woman["computer scientist"] // => ???
Side Note: Who is Grace Hopper? She is one of the most influential people in the history of computer science and software engineering. Read more about her contribution to our field here.
 */

/*
2. Write a function formatName that takes the person object that you created above (the first exercise at the top) as an argument, and returns your full name.
*/
function formatName(person){
  return person[name] + " " + person[last];
}

/*
3. Using these objects:
var people = [
     {name: {first: "Grace", middle: "B.", last: "Hopper"}, age: 85},
     {name: {first: "Adele", last: "Goldstine"}, age: 43},
     {name: {first: "Ada", last: "Lovelace"}, age: 36},
     {name: {first: "Hedy", middle: "E.", last: "Lamarr"}, age: 85},
     {name: {first: "Ruchi", last: "Sanghvi"}, age: 34}
];
- Add the object representing yourself (person) to this array of people (if your name key does not have the same "shape" as the ones above, change it to look like these).
- Write a function that, when passed people as an argument, returns an array of their full names. Can you use your formatName function here?
- Write a function that finds the average age of the people array.
- Write a function that, when given people and an age as arguments, returns an array of just the people that are older than the specified age.
- Side Note: The women in the people array are all very famous. What did they do?
- Bonus Points: What is the name of the woman in the picture here?
*/


// var o1 =  {a: 1, b: 2, c: 3, d: 4}

// function removeOddValues(obj)
// {
//     var flag = ""; 
//     for(var i in obj)
//     {
//         flag= typeof(obj[i]); 
//         if (flag === "number")
//         {
//              if (obj.i % 2 !== 0){
//                  delete obj[i]
//              }
//         }
//     }
// return obj;
// }
/*
Advanced
1. The function Object.keys returns an array of an object's keys. Experiment with it at the console like this:
Object.keys({a: 1, b: 2});
Using this property, write versions of the above functions using repetition through function invocation (i.e. recursion)
*/


// function recurjectObject(obj){
//   var flag = false; 
//   if (flag == false)
//     var arr = []; 
//   else{
//     flag = true;
//      if ( === 0) return arr;
//     return arr.push(recurjectObject(-1));
//     }
// }
// 'hello world hello '
// 

// Hello Hello world Hello 
function countWords1(str){
    var obj = {};
    var count = 1; 
    var arr = str.split(" ")
    for (var i = 0; i < arr.length; i++) {
      for (var j  = 1 ; j < arr.length ; j++){
        if(arr[i] === arr[i+1]){
          count++; 
        }
       
      }
        obj[arr[i]] = count; 
    }
    return obj;
}


function countWords(str){
    var obj = {};
    var arr = str.split(" ")
        for (var i = 0; i < arr.length; i++) {
            if(!obj[arr[i]]){
                console.log(obj[arr[i]]);
                obj[arr[i]] = 0;
            }
                obj[arr[i]]++;
        }
        return obj;
}





/*


// write a function called longestName, that takes an array as an input (in this case its bucketOfSloths array)
// and returns the sloth with the longest name in that array
// Note that: the longest name is not only the first name, its first, middle and last name toghter 
function longestName(bucketOfSloths) {
  //your code is here 
}
*/

var bucketOfSloths = [
  {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2},
  {name: {first: "Slow", last: "Pumpkin"}, age: 3},
  {name: {first: "Bullet", middle: "Proof", last: "Sloth"}, age: 4},
  {name: {first: "Boos", middle: "Boos", last: "Bun"}, age: 5},
  {name: {first: "Jungle", last: "Fuzz"}, age: 2}
];


function longestName(arr){
  var sloth = []; 
  var name  ="" ; 
  for (var i = 0 ; i < arr.length; i++) {
    for (var key in arr[i]){
      if (arr[i].name.middle === undefined){
        name = arr[i].name.first + " " + arr[i].name.last ; 
      }else{
        name = arr[i].name.first + " " + arr[i].name.middle+ " " + arr[i].name.last ;
      }
      sloth.push(name);
    }
  }
  var longest = sloth[0];
  for ( var i =0 ; i < sloth.length; i++){
    if ( longest.length < sloth[i])
      longest = sloth[i];
  }
  return longest; 
}
    
