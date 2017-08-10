// remmber to realx and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript

// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE: please use the console to test your code :)

//=============================================================================
/*                              Q1                                           */
//=============================================================================
//lets make a user profile using closures
//create a function person when invoked returns the name of that person

function person(name) {
    var initName = name;
    // return function() {
    //     return initName;
    // }
    var friends = [];
    //your code is here
    return {
        // function() {
        //     console.log(initName);
        //     return initName;
        // },
        sayMyName: function() {
            return 'hello ' + initName;
        },
        addFriend: function(object) {
            friends.push(object.sayMyName());
            return ' a friend has been added!!'
        },
        listFriends: function() {
            return friends.length;
        }
    };
}

var personA = person("jack")
var personB = person("Mark")
var personC = person("Sara")


console.log(personA.sayMyName());
console.log(personB.sayMyName());
console.log(personB.addFriend(personA));
console.log(personB.listFriends());

// personA.sayMyName(); // "jack"
// personB.sayMyName(); // "Mark"

//now modify that closure and add a function that says hello to the person name;

// personA.sayHello(); // hello jack
// personB.sayHello(); // hello Mark

//how about we let jack and mark meet toghter!
//modify your closure and add function addFriend that accepts object of functions, and let jack meets his friends.

// personA.addFriend(personB); // "you just became friend with Mark"
// personA.addFriend(personC); // "you just became friend with Mark and Sara"

//modify your closure to tell mark how many friends does he have

// personA.listFriends(); // "Mark! you have 2 friends"


//=============================================================================
/*                                  Q2                                    */
//=============================================================================
//lets create a football team using OOP concept,
// a - we need to create the players (lets create only one for now), the player declaration should take the name of the player

// var player1 = Player("messi")

// b - we need function to add the other info for the player with addInfo function

// player1.addInfo(age, position, level, availability );

// c- create another function to increase the the level for the player by n value

// player1.increaseLevel(4);

// d - we need another function to check the player state, if the player is available it should return true , if not it should return false
//      note that the default state of the player is false.

// player1.isAvailable();  // true / false

// f- in order to change the state of the player, create a function called chageState, when called it will make the player avaliablity true,
//    and when called again it will make it false.

// player1.chageState(); // true
// player1.chageState(); // false

//writ your code here .....

//=============================================================================
/*                                  Q3                                    */
//=============================================================================
function reduce(array, f, acc) {
    if (acc === undefined) {
        acc = array[0];
        array = array.slice(1);
    }
    each(array, function(element, i) {
        acc = f(acc, element, i);
    });
    return acc;
}

// Use the updated version of reduce to write a function max that returns the maximum number in an array of numbers.  
function maxi(arr) {
    // your code is here
}

maxi([6, 2, 8, 9]) // 9
maxi([9, 1, 14, -4]) // 14

//=============================================================================
/*                                  Q4  (extra just if you finished the above)                                  */
//=============================================================================


// In case you finished the above and you have some time left, do the following:
// you can only use MDN as a resource in case you need one (https://developer.mozilla.org/en-US/docs/Learn/HTML)
// Create a new html file called html_yourname.html and do the following:
//    a. Change the title to : My easy Assessment
//    b. Change the background color for the whole page.
//    c. Change the font family for the header of the page
//    d. Add horizital line
//    e. Create a new div with id myInfo
//        1. Add header : HTML is Eazy
//        2. Add the following paragraph:
//            HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications.
