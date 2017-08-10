// /*
// Basic Requirments
// 0.Some Terms to know:

//  Data: Strings, booleans, numbers, arrays and objects. 
//  Model: A way of representing something as data. 
//  Instance: A single representation of something as using a model. For our purposes, this will be an object. 
//  Factory function: A function that outputs instances of a model.
// 1. Think about some different attributes of books – what do all books have? Ideas include:

//  Title 
//  Author 
//  MSRP 
//  Genre 
//  Number of Pages 
//  Description
// */



// 2.In terms of the properties of books that you thought of, represent the following books as data:

//  Harry Potter and the Sorcerer's Stone (J.K. Rowling) 
//  Romeo and Juliet (William Shakespeare) 
//  Structure and Interpretation of Computer Programs (Gerald Jay Sussman, Hal Abelson) 
//  NOTE: Did you account for the possibility of two authors? If not, update your model to handle multiple authors. 
//  Three other books (see this list for ideas)





// // 3.You may have been rewriting the same type of object over and over. We need to stay DRY (Do Not Repeat). Write a function makeBook that takes as arguments different attributes of a book and returns an object representing that book that has the proper structure (we call this a factory function).

function makeBook(title, author, msrp, genre, numberOfPages, description){
	return {
		title : title, 
		author, author, 
		msrp, msrp, 
		genre, genre, 
		numberOfPages: numberOfPages, 
		description: description
	};
}


// // 4.Look at one of your book objects in the console. This is the object inspector. The object inspector is nice to have, but it will be easier to have a function to display the more important information easily. Write a function called displayBook that takes a book as an argument, and returns the important information in a more readable way, for example:

// // var sorcerersStone = { /* ...  } 
// //  function displayBook(book) { 
// //        // ... 
// //  } 
// //  displayBook(sorcerersStone); 
// //  // => 'Harry Potter and the Sorcerer's Stone, by J.K. Rowling -- fantasy, $24.99'
// // The output string above is only an example. What information is most important to you? How can you make that information easier to read for people?

var book1 = makeBook(
"Harry Potter and the Sorcerer's Stone",  "(J.K. Rowling)",  
'24', "fantsy", 880, "this is a great book"
);

var book2 = makeBook(
"Sorcerer's Stone",  "(Ayman)",  
'10', "history", 650, "this is a great book"
);

function displayBook(book){
	return book.title + " by " + book.author + " -- " + book.genre + " for $" + book.msrp ;
}

// // 5.Create an array called books that holds all of the books that you created above.

var books = [book1, book2]


// // 6.Your function displayBook can be used to display a single book as a string. Now, write a function displayBooks that, given an array of books, returns a single string consisting of all of the books. Use the function displayBook to format all of the books. Each book should be numbered and separated with a newline (we also call this a line break) character so that each book is shown on a separate line in the console. The newline character is specified with a special escaped character in a string:

// //  // Enter the below line into a console 'Hello /n World!'; // the 'backslash n' character is a newline 
//  function displayBooks(books) { 
//        // ... 
//  } 
//  displayBooks(books); 
//  // => '1. Harry Potter and the Sorcerer's Stone... /n 2. Snow Crash, ...'
function displayBooks(books){
	for ( var i =0 ; i < books.length; i++){
		console.log(displayBook(books[i]));
	}
}

// // 7.Write a function searchBooks that, given a query and an array of books, searches the array of books for 'matching' books. You will decide what way you want to write your search algorithm. Here are some things to think about: What fields will be searched? Will you search multiple fields simultaneously (it might be best to start with one field, e.g.title)? Should the search be case-sensitive? How will the search work? Will it only work from the beginning of a field, or from anywhere within? some hints:

 'Harry Potter'.toLowerCase();    // => 'harry potter' 
 'Harry Potter'.substr(0, 5);     // => 'Harry' 
 var query = 'Harry'; 
 'Harry Potter'.substr(0, query.length); // => 'Harry' 
 'Harry Potter'.indexOf('Pot');  // => 6 
 'Harry Potter'.indexOf('dog');  // => -1
// //  A good starting point would be to write a function isMatch that accepts two arguments – the query and a single book – 
// //  and returns true if the book is a match, and false otherwise.

function searchBook(query, array){

}

// // 8.Write a function removeBook that, given a book's title and an array of books, returns a new array of books that does not contain the book with the provided title.



function factoryFunction(title, Athour, numOfPages, Descreption, language) {
return {
    title: title,
    Athour: Athour,
    numOfPages: numOfPages,
    Descreption:Descreption,
    language: language
    }
    
}
var book1= factoryFunction("Harry Potter","J.K. Rowling",320, 'novel in imagine','english');
var book2 = factoryFunction('Romeo and Juliet','William Shakespeare',50, ' trajedi play','arabic');
var book3=factoryFunction("Structure and Interpretation" , "Gerald Jay Sussman" ,3000, "technology",'french' )

function displayBook(book) {
    return book.title + " " + book.Athour+ " " + book.language ;

}

var books = [book1, book2, book3];

function displayBooks(books) { 
    var str = '';
    for ( var i = 0; i< books.length; i++ ){
        str= str + displayBook(books[i]) +  '\n';
        
    }
    return str;
}
function isMatch ( query, book){
    var result = ''; 
    for (var  key in book){
        // confirt book[key] toString otherwise it will be crashed when reached to non-string
        if (book[key].toString().indexOf(query) > -1)
            result = result + book[key] + "\n";
    }
    return result;
}

function isMatch1( query, books){
    var res = '';
    for ( var i = 0; i< books.length; i++ ){
        res = res + isMatch(query, books[i]);
        // return true + books[i].title;
    }
    return res; 
}

        // return false;
