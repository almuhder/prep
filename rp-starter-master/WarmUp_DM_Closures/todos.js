// --------------------------------------------------- //
//            Data Modeling with Closures              //
// --------------------------------------------------- //
// 1. Write a function  makeCounter that will generate an ID for each new candidate counter start from 0
// 2. Create three candidate objects with the following properties (name, age, gender, id).
// NOTE: You need to create the candidateFactory function which return the candidate object
// 3. Create an array of candidates called arrCandidates and add your the three candidates objects that // you created before.
// 4. Create displayCandidateInfo function which accepts a candidate as parameter and prints all candidates infos.
// 5. Create candidatesList function which accepts an array of candidates and contains the following functions :
// - displayCandidates : this function will print all the candidates info
// - addCandidate: this function accpets an object as parameter and add it to the array
// - removeCandidate : this function will remove the candidate that passed into it as parameter.
// - restCandidates:  this funtion will rest and remove all candidates



function makeCounter1() {
    var counter = 1;
    return function() {
        var t = 0;
        t = counter;
        counter = counter + 1;
        return t;
    };
}

var idGenerator = makeCounter1();

function candidateFactory(name, age, gender) {
    return {
        name: name,
        age: age,
        gender: gender,
        id: idGenerator()
    };
}

var cand1 = candidateFactory('majd', 30, 'male');
var cand2 = candidateFactory('maher', 20, 'male');
var cand3 = candidateFactory('ahmad', 35, 'male');

var arrCandidates = [cand1, cand2, cand3];

function displayCandidateInfo(obj) {
    return 'ID: ' + obj.id + '\t Name: ' + obj.name + '\t Age: ' + obj.age;
}



function candidatesList(array) {
    return {
        displayCandidates: function() {},
        addCandidate: function(obj) {
            array.push(obj);
        },
        removeCandidate: function(obj) {
            arr.splic(obj, 1);
        },
        restCandidates: function restCandidates() {
            array = [];
        }

    };
}

// generateID is a *function* that, when invoked, returns a number representing
// an ID.
// var generateID = makeCounter();
// By using a counter, we have a function that will always generate a new number
// -- this is great for generating unique IDs for things.

// EXERCISE 1
// Try the following at your console:

// generateID(); // => ?

// What does it return? Try invoking generateID a few more times to be certain
// of how it works.


// // EXERCISE 2
// function candidateFactory(name, age, gender, id) {
//     return {
//         name: name,
//         age: age,
//         gender: gender,
//         id: generateID() // use generateID to make an ID for this todo
//     };
// }
//
// // EXERCISE 3
// function displayCandidate(candidate) {
//     // your code here
// }
//
//
// // EXERCISE 4
// // var myTodoList = makeTodoList(???);
//
// // makeTodoList accepts an *array* of todo objects as a parameter, and returns
// // an object with methods for manipulating todos
// function candidateList(initialTodos) {
//
//
//     return {
//         display: function() {
//
//         },
//         add: function(candidate) {
//
//         },
//         remove: function(candidate) {
//
//         }
//     };
// }
//
// // =============================================================================
// // HELPER FUNCTIONS
//
// function makeCounter() {
//     var count = 0;
//     return function() {
//         var t = count;
//         count = count + 1;
//         return t;
//     };
// }
