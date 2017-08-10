/*function powerFunc(base,exp){
	var result=1

	for (exp ; exp >= 0 ; exp--){
		
		if (exp == 0)
			return result;
		else 
			result = result * base;
		
	}

	return result;
}
*/
/*function oldEnough (person){
	if (person>= 16)
		return true;
	else return false;
}
*/
/*function sameLength(str1,str2){
	if (str1.length === str2.length){
		return true;
	}
	}
	else{
		return false;
	}
}
*/

function rentalCar (name, age,day){
	if (age>=21 && name !== "Joe"){
		result = "Have fun driving" + " " + name;
		return result;
	}
	else if (age < 21 && age > 18 && day === "monday" || day === "tuesday") {
		result = "Have fun driving" + " " + name;
		return result;
	}
	else return "Sorry you cant rent a car";


}  


/*function min (x,y){
	if (x===y){
		return "these numbers are equels";}
	else if(x<y) {
		return x;
	}
	else{
		return y;
	}
	
}
*/

/*function neg(num){
	if (num<0){
		return "neg";
	}
	else{
		return false;
	}
	
}
*/

function guessMyNumber(num){
	randNum = Math.floor(Math.random()*5);
	if (num> 5 || num < 0){
		return "enter a number from 0 -- 5";
	}
	else if (num === randNum){
		return "You guessed my number!";
	}
	else {
		return "Nope! That wasn't it!";
	}

	
}

/*function randInt (num){
	result = Math.floor(Math.random() * (num-1) + 1);
	return result;
}
*/

function ProdByThree (x){
	return x*3;
}
function MultyXY (x,y){
	return x*y;
}

function myTrueFun (){
	return true;
}

function color (type){
	if (typeof type === "string"){
		return true;
	}
	else
		return false
}

function primeNum (num){
	fixedNum = num;

	if (num === 1 || num === 2){
		return "Your number is prime :)";
	}
	else{
		for(num; num >=2; num--){
			if (fixedNum % num-1 !== 0)
				continue;
			else 
				return "your number is not prime :(";
		}
		return "your number is prime :)";
	}

}

function numbers (x,y){
	if (x==y)
		return false;
	else 
		return true;
}

function grades(grade){
	var result;
	switch (true){
		case (grade > 90) :
		result = "A";
		break;
		case (grade >= 80) :
		result = "B";
		break;
		case (grade >= 70) :
		result = "C";
		break;
		case (grade >= 60) :
		result = "D";
		break;
		case (grade < 60) :
		result = "F";
		break;
		default: result= "Enter an apropriate grade !"

	}
	return result;

}

function whatToDo(temp){
	if (temp==="sunny"){
		return "play outside";
	}
	else if (temp === "snowy"){
		return "go skiing";
	}
	else 
		return "DO NOT DO ANything"
}

function or (x,y){
	if(x=== false && y===false){
		return (x&&y)
	} else if(x=== true && y===true){
		return (x&&y)
	}
	return !(x&&y)
}

function and (x,y){
	if(x=== false || y===true){
		return !(x||y)
	} else if(x=== true || y===false){
		return !(x||y)
} else 
return (x||y)
}

function scoreToGrade(grade){
	var preLetterGrade;

	if (grade > 90){
		preLetterGrade = "A";
		letterGrade(preLetterGrade,grade);
	}
	else if (grade<=90 && grade >80){
		preLetterGrade = "B";
		letterGrade(preLetterGrade,grade);
	}
	else if (grade<=80 && grade >70){
		preLetterGrade = "C";
		letterGrade(preLetterGrade,grade);
	}
	else if (grade<=70 && grade >60){
		preLetterGrade = "D";
		letterGrade(preLetterGrade,grade);
	}
	else if (grade< 60){
		preLetterGrade = "F";
		letterGrade(preLetterGrade,grade);
	}
}

function letterGrade(preLetterGrade,grade){
	if (preLetterGrade = "A" && grade >98 && grade<=100)
		return "A+";
	if (preLetterGrade = "A" && grade > 90 && grade<=98)
		return "A-";
	if (preLetterGrade = "B" && grade >98 && grade<=100)
		return "B+";
	if (preLetterGrade = "B" && grade >98 && grade<=100)
		return "B-";

}

function sum (x){
	if (x===0){
		return 0;
	}
	else{
		return x+= sum(x-1);

	}
}

function factorial(x){
	if(x===1){
		return 1;
	}	else{
		return x*=factorial(x-1)
	}
}
function repetString(str,count){
	if (count===0){
		return "";
	}
	else {
		return str= str + repetString(str,count-1);
	}
}
var array=[];
function fubi(n){
	if (n===0 || n === 1){
		return 1;
	}
	else{
		return  fubi(n-1) + fubi(n-2);
	}
}

function sum2(start,end){
	if(end===start){
		return start;
	}
	else {
		return start+=sum2(start+1,end);
	}
}

function serProd(start,end){
	if (start===end){
		return start;
	}
	else{
		return start*= serProd(start+1,end);
	}
}

function inc(x) {
 return x + 1;
}
function dec(x) {
 return x - 1;
}

function add(x,y){
	if (y===0){
		return x;
	}
	else{
		//x= inc(x);
		return add(inc(x),dec(y));

	}

}

function isEven(num){
	if (num===2){
		return true;
	}
	if (num<=1)
		return false;
	else
		return isEven (num-2);

}
function multiply(x,y){
	if(y===1){
		return x;
	}
	else {
		return x=x+multiply(x,y-1);
	}
}

var cnt = 0;
function stringLength(str){
	if(str===""){
		return cnt;
	}
	else{

		cnt++
		str= stringLength(str.slice(1))
	}
	return cnt;
}

function mode(x,y){
	if(x<y){
		return x;
	}
	else {
		return mode(x-y,y);
	}
	
}


function countChars(str , char){
	if(str === ""){
		return 0;
	}
	else if(str[0] === char){
		return 1 + countChars(str.slice(1) , char);
	}
	else
		return countChars(str.slice(1), char);
}

function indexOf(str, char){
	if (str[0]===char)
		return 0;
	else
		return 1+ indexOf(str.slice(1),char);
}

/*function power (base,exp){
	if (exp === 0){
		return 1;
	}
	else

}
*/

function pattern (patt,num){
	if(num===0){
		return ;
	}
	else
	{
		console.log(patt);
		if (patt.slice(1)==="")
			return pattern(patt + patt, num-1);
		else
			return pattern(patt + patt[0],num-1);
	}


}

function pattern1 (patt,num) {
	if (num===0){
		return;
	}
	else{
		console.log(patt);
		return pattern1(patt.slice(1),num-1);
	}

}



function pow(base, exp){
	if(exp === 0){
		return 1 ;
	}
	else if(exp%2=== 0 ){
			return   pow(base*base,exp/2);
		}
	else 
		return base * pow(base*base , (exp-1)/2);
	}


function multiplyBy10(x,n){
	if (n===0){
		return x;
	}
	else{
		x*=10;
		return multiplyBy10(x,n-1);
	}

}


function rand(max,min){
	return Math.floor(Math.random()*max)+min;
}

function range(x,y){
	if ((x+1)===y){
		return "";
	}
	else{
		x++;
		return x.toString() + " " +range(x,y);
	}
}

function reverse (str){
	if (str===""){
		return "";
	}
	else
		return str[str.length-1] + reverse(str.slice(0,str.length-1));

}

function sumOfmultible(cnt){
	if (cnt===0){
		return 0;
	}
	else if(cnt%3===0 || cnt%5===0){
			return cnt+sumOfmultible(cnt-1);
		}
	else return sumOfmultible(cnt-1);

}
var x;
var y;
var flage = false;
function gcd (num1,num2){
	if (flage === false){
		x =num1;
		y = num2;
		flage==true;
	}
	if (num1<num2){
		if(x%num1 ===0  && y%num1===0){
			return num1 ;
		} else return gcd(num1-1 , num2);

	}else {
		if(x%num2 ===0  && y%num2===0){
			return num2 ;
		} else return gcd(num1 , num2-1);

	}
}

var x = 0;
function counter(){
	return x++ 
}


//var hint;
// var highScore = 6;
// var guessCounter = 1;
// //var upperBound = 10;
// var computerNum = randInt(upperBound);

function guessMyNumber1(n) {
	if (n > upperBound) {
	  return "Out of bounds! Please try a number between 0 and " + " " + upperBound;
	} 
	else if (n === computerNum ) {
		if(guessCounter === 1){
			guessCounter=0;
			if(upperBound<20){
				upperBound+=1
			}
			computerNum = randInt(upperBound);
			return "Congratulations! You guessed my number on the first try!";
		}
		else{
			if(guessCounter<highScore){
				highScore=guessCounter;
			}
			var rightResult = "You guessed my number in " + guessCounter + " guesses \n " + "Your High score is " + highScore;
			guessCounter=0;
			if(upperBound<20){
				upperBound+=1
			}
			computerNum = randInt(upperBound);
			return rightResult;
		}
	}
	else{
		guessCounter++;
		if(guessLimit(guessCounter)=== true){
			if(upperBound > 2){
				upperBound -= 1;
			}
			guessCounter=0;
			computerNum = randInt(upperBound);
			return "Game over !";
		}
		else{
			if(n>computerNum && n-computerNum === 3){
				hint = "your guess is too high"; 
			}
			else if (n< computerNum && n-computerNum ===-3){
				hint = "your guess is too low";
			}
			else
				hint = "You are getting close !";
			var tryResult= "Nope! That wasn't it!";
			return tryResult + " " + hint;
		}
		
	}
}

	function randInt(n) {
	return Math.floor(Math.random() * (n + 1));
	}

	function guessLimit(numberOfGuesses){
		if (guessCounter === 4){
			return true;
		}
		else{
			return false;
		}
	}

function squareArea(x){
	var y = x*x;
	return y;
}

/*function Alphabet (letter) {

	var alpha = {};
	var arr = { "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, "I": 9, "J": 1, "K": 2, "L": 3, "M": 1, "N": 2, "O": 3, "P": 1};
	return alpha[letter];
	

}*/

function repetStr (string,n){
	if (n==0){
		return "";
	}
	else return string + repetStr(string,n-1);
}
function sumWhile(n){
	var sum=0;
	var count=1;
	while(count<=n){
		sum = sum + count;
		count++;
	}
	return sum;
}

function factWhile(n){
	var result = 1;
	var counter = 1;
	while (counter<=n){
		result *= counter;
		counter++;
	}
	return result;
}
function repeatStr(str,n){
	var count=0;
	var result = "";
	while(count<n){
		result=result+ " " + str;
		count++;
	}
	return result;
}

function addWhile(x,y){
		var result = 0;
		if (y===0){
			return x;
		}
		while (y>0)
		{
			result =inc(x);
			y = dec(y);
			x = inc(x);
		}
		return result;
}

function counting(n){
		var number = 1;
		var result = ""
	while ( n > 3){
		result = result + number + "," ;
		number++;
		n--; 
	}
	return result + number;
}

/*function meetAndGreet(vistores){
	var counter = 1
	var meet = "";
	var welcome = "welcome ";
	var result = "";
	while(counter <= vistores){
		result = result + welcome + counter + meet + "\n";
		counter+=1;
		meet = ", meet" + (counter-1) ;
	
	}
	return result;

}
*/ 

function meetAndGreet(vistores){
	var result ="";
	var cnt = 1;
	var meet =", meet ";
	var arrayOfVistores = counting(vistores).split(",");
	while (cnt<=vistores){
		if (cnt===1){
		result += "welcome " + cnt + "\n";
		}
		else if(cnt === 2)
		{
			result += "welcome " + cnt + meet + (cnt-1) + "\n";
		}
		else {
			var lastVistores = counting(cnt+1).split(",");
			lastVistores  = lastVistores[lastVistores.length-1];
			result += "welcome " + cnt + meet + counting(cnt) + " and " + lastVistores + "\n"
		}
		cnt++;	
	}
	return result;
}


function alphabetPosition (char){
	var alphabetic = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	return alphabetic.indexOf(char) + 1;
}

function cibiod (l,w,h){
return l*w*h;
}

function reverseString (str){
	var revString = "";
	while (str.length!==0){
		revString = revString +  str.charAt(str.length-1);
		str = str.slice(0,str.length-1);

	}
	return revString;
}

function primeWhile(n){
	var primeNumbers = "";
	while(n>1){
		var test = n-1;
		while (test>1){
			if (n%test === 0){
				break;
			}
			else{
				test--;
			}	continue;
		}
		if(test>1){
			n-=1;
		}
		else{
			primeNumbers+= n + " ";
			n-=1
		}

	}
	return primeNumbers;
}

function oddOrEven(number){
	while (number > 0){
		if(number%2===0){
			console.log(number + " is even");
			number-=1;
		}
		else{
			console.log(number + " is odd");
			number-=1;
		}
	}
}

function draw(char,bound){
	var result = char;
	var cnt = 0;
	while (cnt < bound){
		if (cnt< Math.ceil(bound/2)){
			console.log(result+char);
			cnt++;
		}
		// else {
		// 	result-= char - char;
		 	cnt++;
		// }
	}
	return result;
}

function mult(n){
	if (n===1){
		return 1;
	}
	else {
		return n * mult(n-1);
	}

}

function seriesWhile(n){
	var result ="";
	var cnt = 1;
	while (cnt<n){
		result = result + cnt + (cnt+1);
		cnt++;
	}
	return result + cnt;
}

function calculator(num1,num2,sign) {
	if (sign === "+"){
		result = num1+num2;
		return result;
	}
	else if (sign === "-"){
		result = num1 - num2;
		return result;
	}
	else if (sign === "x"){
		result = num1*num2;
		return result;
	}
	else if (sign === "/"){
		if (num2!==0){
		result = num1/num2;
		return result;
		}
		else
			return "divide by 0 is undefined !";

	}
	else 
		return "enter an appropriate symbol !"
}

function numFact (n){
	var test = n-1;
	var result = "1 " + n; 
	while (test > 1){
		if (n%test===0){
			result+= " " + test;
			test--;
		}
		else
			test--;
	}
	return result;
}

function RPS(char){
	var range = "RPS";
	var userTry;
	var pcTry = Math.floor(Math.random()*3);
	if (range.indexOf(char)===-1){
		prompt("Please enter appropriate charcter");
		return;
	}
	else{
		userTry = range.indexOf(char);
	}
	if (userTry===pcTry){
		return "Tie !";
	}
	else if (Math.abs(userTry-pcTry)===1){
		if (userTry>pcTry)
			return "Congratulations, you win :)";
		else
			return "Opps, you lose :(";
	}
	else {
		if (pcTry>userTry)
			return "Congratulations, you win :)";
		else
			return "Opps, you lose :(";
	}
	}


var arrTest = ["saleem", "bakri", "sahar", "shurufat"];
function first(array){
	return array[0];
}

function arrayLast(array){
	return array[array.length-1];
}

function multypliOdd(arr){
	var cnt = 0;
	while(cnt<arr.length){
		if (arr[cnt]%2!==0){
			arr[cnt]*= 2;
			cnt+=1;
		}
		cnt+=1;
	}
	return arr;
}

function typos(){
	var placesArray = ['snfranisco', 'oacklannd', 'santacrus'];
	placesArray[0]= "san fransico";
	placesArray[1]= "oack laned";
	placesArray[2]= "santa crus";
	return placesArray;
	
}

function nth(array, index) {
   	return array[index];
}

function rest(arr){
	return arr.slice(1);
}

function butLast(arr){
	return arr.slice(0,arr.length-1);

}

function cons(x, arr){
	arr.unshift(x);
	return arr;
}
function conj(arr,x){
	arr.push(x) ;
	return arr;
}

function mystery(array) {
  if (array.length === 0) {
    return [];
  }
  return conj(mystery(rest(array)), first(array));
}

function switchToWord(num){
 switch (num){
 	case 0: return "zero";
 					break;
 	case 1: return "one";
 					break;
 	case 2: return "two";
 					break;
 	case 3: return "three";
 					break;
 	case 4: return "four";
 					break;
 	case 5: return "five";
 					break;
 	case 6: return "six";
 					break;
 	case 7: return "seven";
 					break;
 	case 8: return "eight";
 					break;
 	case 9: return "nine";
 					break;
 	default: return"please enter number between 0 and 9";
 }
}

// function binToInt(arr){
// 	var cnt = 0;
// 	var result = 0;
// 	revArray = mystery(arr);
// 	while(cnt<revArray.length){
// 		if(revArray[cnt]===1){
// 			result += Math.pow(2,cnt);
// 		}
// 	  cnt++
// 	}
// 	return result;
// }
function removeDub(arr){
	var cnt = 0;
	filterArray=[];
	while(cnt<= arr.length-1){
		if(filterArray.indexOf(arr[cnt])===-1){
			filterArray.push(arr[cnt]);
		}
		cnt++
	}
	return filterArray;
}

function nextItem(arr,item){
	var result;
	var cnt= 0;
	while (cnt <= arr.length-1){
		if (arr[cnt] === item){
			result = arr[cnt+1];
			break;
		}
		cnt++
	}
	if(result === undefined)
		return "this item is not belong to the array !"
	else return result;
}


var lastNum=0;
var firstNum=0;
var flage = true;
function sumFirstLast(num){
	var cnt1 = 0;
	var cnt2 = 0;
	while(num%10!==0){
		num-= 1;
		cnt1+= 1;
	}
	if(flage===true){
		lastNum = cnt1;
		flage = false;
	}
	
	while(num!==0){
		num= num-10;
		cnt2+=1;
	}
	if(cnt2<10){
		firstNum = cnt2;
		return firstNum+lastNum;
	}
	else{
		sumFirstLast(cnt2);
		return firstNum+lastNum;
	}
}

// function sumFirstLast(num){
//     var lastNum=0;
//     var firstNum=0;
//     var cnt1 = 0;
//     while(num%10!==0){
//         num-= 1;
//         cnt1+= 1;
//     }
//     lastNum = cnt1;
//     while(num>10){
//         num = num/10
//     }
//         if(num<10){
//     firstNum = Math.floor(num) ; 
//         }else {
//             firstNum = num/10
//         }
//         return firstNum+lastNum;
    
// }



function drawDiamond (symbol,bound){
	var result = "    " + symbol;
	var y = 1;
	var x = 1;
	console.log(result);
	while (y<bound){
		while(x<=y){
			if (x < Math.ceil(bound/2)){
			result = result.slice(1)  + symbol + symbol;
			console.log(result);
			}
			else{
				result = " " + result.slice(0,result.length-2);
				console.log(result);
			}
			x++;
		}
		y++;
	}
}

function sheeps(arr){
	var cnt = 0;
	var result = 0;
	while(cnt< arr.length){
		if (arr[cnt]===true){
			result+= 1;
			cnt+=1;
		}
		else{
			cnt+=1;
		}
	}
	return result;
}

function DNAtoRNA (dna){
	return dna.replace(/T/gi,"U");
}

function squareSum (arr){
	var result = 0;
	var cnt = 0;
	while(cnt<= arr.length-1){
		result += Math.pow(arr[cnt],2);
		cnt++;
	}
	return result;
}

arrMale = ["saleem", "muhannad", "saeed"];
arrFemale = ["ola", "marwa", "sahar"];
arrStaff = ["Huegh", "Addie", "Majd"];
function arrMiddle (arr){
	return arr[Math.floor(arr.length/2)];
}


function MultiEven (arr){
	cnt = 0;
	while (cnt <= arr.length-1){
		if (cnt % 2 === 0){
			arr[cnt] = 2 * arr[cnt];
			cnt+=1;
		}
		cnt+=1;
	}
	return arr;
}

function sumFor(arr){
	var result = 0;
	for (var i = 0; i<= arr.length-1; i++){
		result+= arr[i];
	}
	return result;
}

function maxValues (arr){
	var max = [arr[0]]; 
	for (var i = 1 ; i<= arr.length-1 ; i++){
		if (arr[i] > max[0]){
			max[0] = arr[i];
		}

	}
	return max[0];
}

function longestWord(str){
	var array = str.split(" ");
	var longest = "";
	for (var i = 0 ; i<= array.length-1 ; i++){
		if ( array[i].length > longest.length){
			longest = array[i];
		}

	}
	return longest
}

function remove (arr,element){
	if ( arr.indexOf(element) >-1 ){
		for (var i = 0; i<= arr.length-1 ; i++){
			if (arr[i]=== element){
				arr.splice(i,1);
			}
		}
		return arr;
	}
	else{
		return "no value to delete !"
	}

}

function evens(array){
	var result=[];
	for(var i=0 ; i<=array.length-1;i++){
		if(array[i]%2 === 0){
			result.push(array[i]);
		}
	}
	return result;
}
function avg(array){
	return sumFor(array)/array.length;
}

function min(arr){
	arr.sort();
	return arr[0];
}

function shortestWord(str){
	var array = str.split(" ");
	var shortest = array[0];
	for (var i = 1 ; i<= array.length-1 ; i++){
		if ( array[i].length < shortest.length){
			shortest = array[i];
		}

	}
	return shortest;
}

function countChar(str,char){
	var cnt = 0;
	var arr = str.split("");
	for (var i = 0; i<= arr.length-1; i++){
		if (arr[i] === char){
			cnt+=1;
		}
	}
	return cnt;
}

function evenLength(array){
	var newArr=[];
	for (var i = 0; i < array.length; i++) {
		if(array[i].length%2 === 0){
			newArr.push(array[i]);
		}
	}
	return newArr;
}

function reverseJoin(str){
	var array = str.split("");
	var revArr= [];
	var length = array.length;
	for (var i =0 ; i < length ; i++){
		revArr.push(array.pop());
	}

	var revString = revArr.join('');
	return revString;
}

function keep (arr,func){

	return func(arr);
}

function findChar(arr,char){
	var result=[];
	for (var i=0 ; i<arr.length; i++){
		if(arr[i].indexOf(char)>-1){
			result.push(arr[i]);
		}
	}
	return result;
}

function sumMystery(arr){
	if (arr.length === 0){
		return 0;
	}
	return first(arr) + sumMystery(rest(arr));

}
function squareMystery(arr){
	if (arr.length === 0){
		return [];
	}
	else
		return conj( squareMystery(rest(arr)) , Math.pow( first(arr) , 2 ) );
}

function evenSquare(arr){
		if (arr.length === 0){
		return [];
	}
	else
		if (first(arr)%2===0){
		return	result.push(first(arr));
			evenSquare(rest(arr));
		}
		else{
			evenSquare(rest(arr));
		}
		
}

// function evenSquare (arr){

// 	if (arr.length === 0){
// 	return [];
// 	}
// 	else

// }

function reversStr(str){
	var newArr = [];
	var arr = str.split("");
	cnt = 0;
	while (cnt<= arr.length-1){
		newArr.push(arr[cnt]);
		newArr.push(cnt);
		cnt++;
	}
	return newArr.join('');
}

function arrSameLength(arr){

}

function arrOfPrime(arr){
	for (var i = 0; i<= arr.length-1; i++){
		for (var y =2; y<arr[i]; y++){
			if(arr[i]%y === 0)
				arr.splice(i,1);
			}
	}
	return arr;
}


var people = [
            {name: {first: "Grace", middle: "B.", last: "Hopper"}, age: 85},
            {name: {first: "Adele", last: "Goldstine"}, age: 43},
            {name: {first: "Ada", last: "Lovelace"}, age: 36},
            {name: {first: "Hedy", middle: "E.", last: "Lamarr"}, age: 85},
            {name: {first: "Ruchi", last: "Sanghvi"}, age: 34},
            {name: {first: "Saleem", last: "Bakri"}, age: 23}
          ];

function displayPerson(obj){
	return obj.name.first + " " + obj.name.last;
}

function arrFNames(arr){
	for (var i=0 ; i<=arr.length-1; i++){
		if (name.middle===undefined)
			console.log(arr[i].name.first + " " + arr[i].name.last);
		
			console.log(arr[i].name.firstelse + " " + arr[i].name.middle + " " + arr[i].name.last);
	}
	return;
}

function avgAge(arr){
	var sum=0;
	for (var i = 0; i<= arr.length-1; i++){
		sum+= arr[i].age;
	}
	return sum/arr.length;
}

function specifedAge(arr,num){
	var filterArray=[];
	for (var i =0; i<= arr.length-1; i++){
		if ( arr[i].age === num ){
			filterArray.push(arr[i].name.first + " " + arr[i].name.last);
		}
	}
	return filterArray;
}

var dirtyObject = {
            _fht: 192492,
            name: "Yan Fan",
            age: 27,
            _byz: 939205,
            _ttrs: 510852
          }

function clean(obj) {
           for (var key in obj){
           	if (key.indexOf("_")>-1){
           		delete obj[key];
           	}
           }
        return obj;
}

function removeOddValues(obj){
	for(var key in obj){
		if(typeof(obj[key]) === "number"){
			if(obj[key]%2 !== 0){
				delete obj[key];
			}
		}
	}
	return obj;
} 

function countWords(str){
	var arr = str.toLowerCase().split(' ');
	arr.sort();
	var cnt=1;
	var obj = {};
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i+1]){
			cnt+=1;
		}
		else{
			obj[arr[i]] = cnt;
			cnt = 1;
		}

	 }
	 return obj;
}

function select(obj,arr){
	var result = {};
		for (var i = 0; i < arr.length; i++) {
			for(var key in obj){
				if(arr[i] === key){
					result[key] = obj[key];
				}
			}
		}
		return result;
	}
function extend(obj1,obj2){
	for (var key in obj2){
		obj1[key] = obj2[key];
	}
	return obj1;
}

// function arg(arg){
// 	var str="";
// 	if(arg.isArray === true){
// 		for (var i = 0; i < arg.length - 1; i >= 0; i++) {
// 			if (typeof(arg[i])=== "string")
// 				str = "'" + arg[i] + "'" + ",";
// 			else
// 				str = arg[i] + ",";
// 		}

// 	}
// }

var mates = [
{
	fullName: "Saleem Bakri",
	age : 23,
	favoriteSport: "nothn",
	nationality: "Syrian"
},
{
	fullName: "Ola Alkhateb",
	age : 24,
	favoriteSport: "kick boxing",
	nationality: "Syrian"	
},
{
	fullName: "Marwa alalawy",
	age : 25,
	favoriteSport: "Basket ball",
	nationality: "Syrian"
},
{
	fullName: "Saed Homsy",
	age : 29,
	favoriteSport: "Football",
	nationality: "Syrian"
},
{
	fullName: "Sajeda yousef",
	age : 23,
	favoriteSport: "swimming",
	nationality: "Jordanian"
}
];

function olderMates (arr){
	var oldest = arr[0]['fullName'];
	for (var i =1; i<= arr.length-1; i++) {

			if(arr[i]['age'] > arr[i-1]['age']){
				oldest = arr[i]['fullName'];
			}
	}
		
	return oldest;
}

 function makeBook (title,author,pages,genre){
 	return {
 		title: title,
 		author: author,
 		pages: pages,
 		genre: genre
 	};
 }


var arrOfBooks = [];
function books(arr,func){
	//console.log(func.apply(this,arr));
	arrOfBooks.push(func.apply(this,arr));
	return arrOfBooks;
}
var book1 = makeBook("Harry Potter",["JK rolling","Mhd"],654,"Fantacy");



function displayBook(obj){
	return "book's title is " +  obj.title + " By " + obj.author + " and it's type is " + obj.genre + "\n";
}

function displayBooks(arr){
	var result = "";
	each(arr,function(obj){
	result += displayBook(obj);
	})
	return result;
}

function searchBooks(arr,str){
	for (var i = 0; i < arr.length; i++) {
		var title = arr[i]['title'].toLowerCase();
		if( title.indexOf(str) > -1){
			return displayBook(arr[i]);
		}
	}
}

function averagePages(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i]["pages"];
	}
	return Math.floor(sum / arr.length);
}





function removeBook(arr,str){
	for (var i = 0; i < arr.length; i++) {
		if(str === arr[i]['title']){
			arr.splice(i,1);
		}
	}
	return arr;
}

function addTag(obj,tagKey,tagValue){
	if(obj['tags']=== undefined){
		obj['tags']={};
		obj['tags'][tagKey]=tagValue;
	}
	else{

		if(obj['tags'][tagKey]===undefined){
			obj['tags'][tagKey]= tagValue + ",";
		}
		else{
			obj['tags'][tagKey] = obj['tags'][tagKey].split(",");
			obj['tags'][tagKey].push(tagValue);
		}
	}
	return obj;
}

function classMates(fullName,age,favoriteSport,nationality){
	return{
	fullName: fullName,
	age : age,
	favoriteSport: favoriteSport,
	nationality: nationality,
	}
}

var StudentID = 0;
var SaleemBakri = classMates("Saleem Bakri", 22, "nothn", "Syrian");
var muhannadBakkar = classMates("Muhannad Bakkar", 25, "Football","Syrian");
var SajedaYousef = classMates("Sajeda Yousef",23,"swimming","Jordanian");
var OlaAlkhateb = classMates("Ola Alkhateb", 21, "kick boxing", "Syrian");
var listOfStudents = [SaleemBakri,muhannadBakkar,SajedaYousef,OlaAlkhateb];

function displayFriend(mate){
	return "Student name is " + mate.fullName + "and his/her nationality is " + mate.nationality
}


function addFriend(fullName,age,favoriteSport,nationality){
	var student = classMates(fullName,age,favoriteSport,nationality);
	listOfStudents.push(student);
	return listOfStudents;

}



function removeExclamationMarks(str){
		arr = str.split("!");
		result = arr.join("");
		return result;
}

function swap(str){
	var result="";
	for (var i = 0; i < str.length; i++) {
		if(str[i]=== str[i].toLowerCase()){
			result += str[i].toUpperCase();
		}
		else{
			 result += str[i].toLowerCase();
		}
	}
	return result;
}


var cube = function(x){
	return Math.pow(x,3);
}

var fullName = function(first, last){
	return first + " " + last;
}

var power = function(b,e){
	if(e === 0){
		return 1;
	}
	return b*power(b,e-1);
}

var sumCubes = function(numbers){
	var total = 0;
	for (var i = 0; i < numbers.length; i++) {
	  total = total + cube(numbers[i]);
	}
	return total;
}

function sumCubesEach(arr){
	var result=0;
	each(arr,function(num){
		result+=cube(num);
	})
	return result;
}



function sumSquares(array){
	var result = 0;
	each(array,function(number){
		result += power(number,2);
	})
	return result;	
}

function productEach(arr){
	var result = 1;
	each(arr,function(number){
		result*= number;
	})
	return result;
}

function cubeAll(arr){
	var result=[];
	each(arr,function(num){
		result.push(cube(num));
	})

	return result;
}

var arrayOfOdds=[];
function oddRec(arr){

	if(arr.length === 0){
		return arrayOfOdds;
	}
	else{
		if(arr[0]%2!==0){
			arrayOfOdds.push(arr[0]);
			arr.shift();
			return oddRec(arr);
		}
		else{
			arr.shift();
			return oddRec(arr);
		}
	}
}

function oddEach(arr){
 each(arr,function (number){
 	if(number%2!==0)
 		arrayOfOdds.push(number);
 })

 return arrayOfOdds;
}

function sumByAllElementsMultipliedByFour(arr){
	var result = 0;
	each (arr,function(num){
		result+= num*4;
	})
	return result;
}

function sumBy(arr,func){
	 var result=0;
	 each (arr,function(num){
	 	result+= func(num)
	 })
	 return result;
}

function productBy (arr,func){
	var result =1;
	each (arr,function(num){
		result*=func(num);
	})
	return result;
}

function doubleAll(arr){
	result = [];
	each(arr,function(num){
		result.push(num*2);
	})
	return result;
}

function halfAll(arr){
	result = [];
	each(arr,function(num){
		result.push(num/2);
	})
	return result;
}


function indexPower(arr){
	var result = [];
	each(arr, function(num,i){
		result.push(Math.pow(num,i));
	})
	return result;
}

function evenIndexedOddNumbers (arr){
	var result = [];
	each(arr, function(num,i){
		if( i%2==0 && num%2 !== 0){
			result.push(num);
		}
	})
	return result;
}

function evenIndexedEvenLengths  (arr){
	var result = [];
	each(arr, function(str,i){
		if( i%2==0 && str.length%2 === 0){
			result.push(str);
		}
	})
	return result;
}

function filter(coll, predicate) {
     var acc = [];
     if(!Array.isArray(coll)){
     	acc= {};
     	     each(coll, function(element, i) {
          if (predicate(element, i)) {
                acc[i] = element;
          }
     });
     }else{
     	     each(coll, function(element, i) {
          if (predicate(element, i)) {
                acc.push(element)
          }
     });
     }

     return acc;
}

function startsWithChar (arr,char){
	return filter(arr, function(num,i){
		return num[0] === char;
	})
}

// function largestSubArray(numbers) {
// 	var maxSeq=0;
// 	for (var i = 0; i < numbers.length; i++) {
// 		var CompareSeq=0;
// 		for (var j = i; j < numbers.length; j++) {
// 			CompareSeq += numbers[j];
// 			if(CompareSeq>maxSeq)
// 				maxSeq = CompareSeq;
// 		}     
//     }
//     return maxSeq;     
// }

// function largestSubArray(numbers) {
// 	var maxSeq=0;
// 	each (numbers,function(digit,i){
// 		var CompareSeq=0;
// 		for (var j = i; j < numbers.length; j++) {
// 			CompareSeq += numbers[j];
// 			if(CompareSeq>maxSeq)
// 				maxSeq = CompareSeq;
// 		} 

// 	})
//     return maxSeq;     
// }

function largestSubArray(numbers) {
	var maxSeq=0;
	each (numbers,function(digit,i){
		var CompareSeq=0;
		each(numbers.slice(i,numbers.length),function(digit,j){
			CompareSeq += numbers[j];
			if(CompareSeq>maxSeq)
				maxSeq = CompareSeq;
		})
	})
    return maxSeq;
}


function absAll(arr){
	var result=[];
	each(arr,function(num){
		if(num<0){
		result.push(num*-1);
		}
		else{
			result.push(num);
		}
	})
	return result;
} 

function stringLength(array) {
	var obj={};
	each(array,function(str){
		obj[str]=str.length;
	})
	return obj;
}

function binToInt(arr){
	var result=0;
	var revArr= arr.reverse();
	each(revArr,function(bit,i){
		if(bit===1){
			result+=Math.pow(2,i);
		}
	})
	return result;
}

// function accum(str) {
// 	var arr = str.split("");
// 	var result = [];
 
// 	for (var i = 0; i < .length; i++) {
// 		[i]
// 	}
// }



function accum (str){
	var arr= str.split("");
	var result = [];
	var index="";
	for (var i = 0; i < arr.length; i++) {
		result.push(index);
		index = "";
		if(i!==0){
			result.push("-");
		}
		for (var j = j+1; j <= 0; j--) {
			index=arr[i].toUpperCase;
			index+=arr[i]
		}
	}
	return result.join("");
}


function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
    	}
    }else{
      for (var key in coll) {
        func(coll[key], key);
    	}
    }
}

function arrToObjOrObjToArr(variable){
	each(variable,function(value,index){
		if(typeof value === "object"){
			if(Array.isArray(value)){
				variable[index] = arrayToObject(value);
			}else{
				variable[index] = objectToArray(value);
			}
		}else{
			variable[index]=value;
		}
	})
	return variable;	
}

function objectToArray(obj){
	var array=[];
	each(obj,function(value){
		if(typeof value === "object"){
			if(Array.isArray(value)){
				array.push(arrayToObject(value));
			}else{
				array.push(objectToArray(value));
			}
		}else{
			array.push(value);
		}
	})
	return array;
}

function arrayToObject(array){
	var obj={};
	each(array,function(value,index){
		if (typeof value === "object"){
			if(Array.isArray(value)){
				obj[index]=arrayToObject(value);
			}else{
				obj[index]=objectToArray(value);
			}
		}else{
			obj[index]=value;
		}		
	})
	return obj;
}

var ex = {ages: [23, 44, {min: 1, max: 2}], people: {height: "tall", eye_color: "brown"}};
var x = [{name : 'Jon',age : 45}, {name : 'Ali', age : 28}, {name :'Omar', age :17},{name :'Ola', age :37}, {name: 'Salwa', age : 22}];

function pName(array) {
	var result = [];
	each (array,function(element,index){
		if(index%2===0){
			result.push(element["name"]);
		}
	})
	return result;
}

function multiplyOfFour(array) {
	var result=[];
	each(array,function(element,index){
		if(element%4===0){
			result.push(element*4);
		}
	})
	return result;
}

function map(coll, f) {
var acc = [];
if (!Array.isArray(coll)) {
  acc = {};
}
each(coll, function(element, key) {
  acc[key] = f(element, key);
});
return acc;
}

function firstName(arr){
	return map(arr,function(elm,index){
			return elm["name"]["first"];
	})
}

/// 3
function maximums(arr){
	return map(arr,function(elm,index){
		var max=0;
		each(elm,function(value,ind){
			if(value>max){
				max=value;
			}
		})
		return max;
	})
}

// more practice ya 3'ali

function exponentials(arr){
	return map(arr,function(elm,index){
		return Math.pow(elm,elm);
	})
}

// 2

function reverseWords(str,func){
	var arr= str.split(" ");
	return map(arr,function(elm,index){
		return func(elm)
	}).join(" ");
}

// 3

function pluck2(arr,str){
	return map(arr,function(elm,index){
		return arr[index][str];
	})
}

function makePerson(first,middle,last,age){
	return {
		name:{
			first:first,
			middle:middle,
			last:last
		},
		age:age
	};
}


function parseCSV(csv){
	var arrObject = csv.split("\n");
	return map(arrObject,function(elm,index){
			var arrValues = elm.split(",");
			if(arrValues.length<4)
				return makePerson(arrValues[0],"",arrValues[1],arrValues[2]);
			else
				return makePerson(arrValues[0],arrValues[1],arrValues[2],arrValues[3]);
	})	
}

function map2(arr1,arr2,func){
	var result = [];
	each2(arr1,arr2,function(elm1,elm2,ind){
		result.push(func(elm1,elm2));
	})

	return result;
}

function each2(coll1, coll2, func) {
    if (Array.isArray(coll1) && Array.isArray(coll2)) {
      for (var i = 0; i < coll1.length; i++) {
        func(coll1[i],coll2[i], i);
    	}
    }else{
      for (var key in coll1) {
        func(coll1[key], coll2[key], key);
    	}
    }
}

/// Advance

function mapN(){
	var result=[];
	var variables = []; 
	var func = arguments[arguments.length-1];
	var args = Array.prototype.slice.call(arguments);
	args.pop();
	while(args[0].length>0){
		each(args,function(arr,argInd){
		variables.push(arr[0]);
		arr.shift();
	})
	result.push(func.apply(this,variables));	
	variables = [];
	}
	return result;
}

// part 2

function incrementValue(obj){
	return map(obj,function(value,key){
		return value+1;
	})
}
function countNestedKeys(obj){
	return map(obj,function(subObj,key){
		var sum=0;
		each(subObj,function(subKey){
			 sum+=1;
		})
		return sum;
	})
}

function select(obj,arr){
    var result = {}
    each(obj,function(elem,key){
        each(arr,function(arra,ind){
            if(key===arr[ind])
                return result[key]=elem;
        })
    })
    return result;
}
//2
function pluck(arr,str){
    var result = [];
    eachPro(arr,function(elm,ind){
        if(ind === str){
            result.push(elm)
        }
    })
    return result;
}
//3
function extend(obj1,obj2){
    each(obj2, function(element,key){
        return obj1[key]=element;
    })
    return obj1;
}
//4
function eachZIP(arr1, arr2, func) {
    for (var i = 0; i < arr1.length; i++) {
            func(arr1[i],arr2[i]);
    }          
}
function zip(arr1,arr2){
    var result = {};
    eachZIP(arr1,arr2,function(val1,val2){
        result[val1]=val2;
    })
    return result;
}
function values(obj){
    var arr = []
    each(obj,function(elm){
        arr.push(elm);
    })
    return arr;
}
//2
function keysLongerThan (obj,num){
    var result = {};
    each(obj,function(elm,key){
        if(num<key.length){
            result[key]=elm;
        }
    })
    return result;
}
//3
function mapOb(obj,f){
    var result = {};
    each(obj,function(elm,key){
        result[key]=f(elm);
    })
    return result;
}
function incrementValues(obj){
    return mapOb(obj,function(elm,key){
        if(typeof elm==="number")
            return obj[key] = elm+1;
        else{
            return obj[key] =elm;
        }
    })
}

function evens(arr){
	return filter(arr,function(elm,index){
		return elm%2===0;
	})
}
function multiOfthree(arr){
	return filter(arr,function(elm,index){
		return elm%3===0;
	})
}
function positeves(arr){
	return filter(arr,function(elm,index){
		return elm>0;
	})
}

function evenLengthFilter(arr){
	return filter(arr,function(elm,index){
		return elm.length%2===0;
	})
}

function startWithChar(arr,char){
	return filter(arr,function(elm,index){
		return elm.indexOf(char) === 0;
	})
}

function evenIndexedEvenLengthsFilter(arr,char){
	return filter(arr,function(elm,index){
		return index%2===0 && elm.length%2 ===0;
	})
}

function fibonacci(){
	var arr=[]
	arr.push(1,1);
	for (var i = 2; i <= 50; i++) {
		arr.push(arr[i-1]+arr[i-2]);
	}
	return arr.map(function(item) {
    return Math.pow(item,2);
	});
}

function evenMult(arr){
	return filter(arr,function(elm,index){
		return index%2===0 && elm%2===0;
	})
}

function endsWithChar(arr,char){
	return filter(arr,function(elm,index){
		return elm[elm.length-1] === char;
	})
}

function range2(start, end) {
    var acc = [];
    if(end===undefined){
    	for (var i = 0; i <= start; i++) {
        acc.push(i);
        }
    }else{
    	for (var i = start; i <= end; i++) {
    		acc.push(i);
    	}
    }

    return acc;
}

  // function reduce(array, f, acc) {
  //   if (acc === undefined) {
  //     acc = array[0];
  //     array = array.slice(1);
  //   }
  //   each(array, function(element, i) {
  //     acc = f(acc, element, i);
  //   });
  //   return acc;
  // }

 
  function reduce(coll, f, acc) {
  	if(Array.isArray(coll)){
    if (acc === undefined) {
      acc = coll[0];
      coll = coll.slice(1);
    }
    }else{
  	(acc=== undefined)
  	acc=Object.keys(coll)[0]
  	delete coll[Object.keys(coll)[0]]  
	}

    each(coll, function(element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }

function factorialReduce(n) {
   var facArr = range2(1,n);
   return reduce(facArr,function(total,elm){
   		return total*= elm;
   },1)
}

function maxReduce(arr){
	return reduce(arr,function(max,elm){
		if(elm>max){
			max=elm;
		} 
		return max;
	},arr[0])
}

function countOccurrences(str,char){
		return reduce(str,function(cnt,elm){
			return str.split(char).length-1
		},0)
}

function every(arr,func){
	return reduce(arr,function(result,elm){
		return func(result,elm);
	},true)
}

function everyNumberEven(numbers) {
     return every(numbers, function(result,number) {
           return result= result && number % 2 === 0;
     });
}

function join(array, separator) {
    var finalStr = reduce(array,function(str,elm){
    	return str+= elm + separator;
    },"")
    return finalStr.slice(0,length-1);
}

function factorialReduceImproved(n) {
   var facArr = range2(1,n);
   return reduce(facArr,function(total,elm){
   		return total*= elm;
   })
}

function zipper(arr1,arr2){
	var result = [];
	if(arr1.length < arr2.length){
		var lower = arr1;
		var upper = arr2;
	}else{
		var lower = arr2;
		var upper = arr1;
	}
	for (var i = 0; i < upper.length; i++) {
		if(lower.length > i){
		result.push(upper[i],lower[i]);	
		}else {
			result.push(upper[i]);
		}
	}
	return result;
}

function merge_sorted(arr1,arr2){
	var result=[];
	var limit = arr1.length + arr2.length;
	for (var i = 0; i < limit; i++) {
		if(arr1[0]<arr2[0]){
			result.push(arr1[0]);
			arr1 = arr1.slice(1);
		}else{
			result.push(arr2[0]);
			arr2 = arr2.slice(1);
		}
	}
	return result;
}

function saveHistory(type,amount,before,after,status){
	return {
		type:type,
		amount:amount,
		before:before,
		after:after,
		status:status
	}
}

function makeAccount(initial) {
	 var log = [];
     var balance = initial;
     return {
           withdraw: function(amount) {
           if (balance - amount >= 0) {
               balance = balance - amount;
               log.push(saveHistory("withdraw",amount,(balance+amount),balance,"approved"));
               return "Here's your money: $" + amount;
           }
           return "Insufficient funds.";
     },
     deposit: function(amount) {
             balance = balance + amount;
             log.push(saveHistory("deposit",amount,(balance-amount),balance,"approved"))
             return "Your balance is: $" + balance;
            },
     checkBalance: function(){
     	return "Your balance is: $" + balance;
     },
     transactionHistory: function(last){
     	var history = "";
     	if(last===undefined){
     		return log;
     	}else if (log.length === 0){
     		return "you don't have any transaction history";
     	}else{
     		for (var i = log.length-1; i >= (log.length - last); i--) {
     			history+= JSON.stringify(log[i]) + "\n";
     		}
     	}
     	return history;
     },
     average: function (type) {
     	if(type!=="withdraw" && type!=="deposit"){
     		return "enter apropriate type!";
     	}
     	var total = reduce(log, function (total, obj) {
     		if (obj["type"]===type){
     			return total+=  obj["amount"];
     		}
     	},0)

     	var cnt=0;
		each(log, function(obj){
     		if(obj["type"]=== type){
     			cnt+=1;
     		}
     	})
     	return total/cnt;
    }

    };
}

function makeCounter(cnt){
	var initial = cnt;
	var start = cnt;
	return {
		up: function(){
			start+=1;
			return start;
		},
		down : function(){
			start-=1;
			return start;
		},
		reset : function(){
			start = initial;
			return start;

		}

	};

}

function makeGame(upperBound){
	var computerGuess = randInt(upperBound);
	var numberOfGuesses = 0;
	return { 
		guessMyNumber: function(n) {
      if (n > upperBound) {
          return "Out of bounds! Please try a number between 0 and " + upperBound + ".";
      } else if (n === computerGuess)  {
              return "You guessed my number!";
      }
            numberOfGuesses +=1;
            return "Nope! That wasn't it!";
	},
		numGuesses: function (){
			return "you have guessed " + numberOfGuesses + " times"
		}, 
		giveUp : function () {
			numberOfGuesses=0;
			computerGuess=randInt(upperBound);
			return "game over! try again";
		}
 
	}

}

function someEven(arr){
	return reduce(arr,function(result,elm){
			if(elm%2===0){
				result = true;
			}
			return result
	},false)
}

function some(arr,predicate){
	return reduce(arr,function(result,elm){
			if(predicate(elm)){
				result = true;
			}
			return result;
	},false)
}

function lengthOverBound (str,bound){
	var arrOfStr = str.split(" ");
	return some(arrOfStr,function(elm){
		return elm.length > bound;
	})
}

function counterMult(){
	var cnt = 0;
	var result = 1;
	return {
		mul : function(){
			result = (result + cnt)*2;
			cnt+=1;
			return result;
		}
	}
}

function cfunalculator(){
	var history=[];
	var result=0;
	return {
		add: function (num1,num2){
			each(history,function(obj){
				if(obj["input1"]=== num1 && obj["input2"]=== num2 && obj["type"]=== "add"){
					return obj["output"];
				}
			})
			var result = num1+num2;
			history.push(calcHis(num1,num2,result,"add"));
			return result;
		},
		mult: function (num1,num2){
			each(history,function(obj){
				if(obj["input1"]=== num1 && obj["input2"]=== num2 && obj["type"]=== "mult"){
					return obj["output"];
				}
			})
			var result = num1*num2;
			history.push(calcHis(num1,num2,result,"mult"));
		},
		subt: function (num1,num2){
			each(history,function(obj){
				if(obj["input1"]=== num1 && obj["input2"]=== num2 && obj["type"]=== "subt"){
					return obj["output"];
				}
			})
			var result = num1-num2;
			history.push(calcHis(num1,num2,result,"subt"));
		},
		divi: function(num1,num2){
			each(history,function(obj){
				if(obj["input1"]=== num1 && obj["input2"]=== num2 && obj["type"]=== "divi"){
					return obj["output"];
				}
			})
			var result = num1/num2;
			history.push(calcHis(num1,num2,result,"divi"));
		}
	}
}
function calcHis (input1,input2,output,type){
	return {
		input1:input1,
		input2:input2,
		output:output,
		type:type
	}
}

var winnerList1 = [
	{season: '1999-00', team: 'Real Madrid', country: 'Spain'},
	{season: '2000-01', team: 'Bayern Munich', country: 'Germany'},
	{season: '1999-00', team: 'Milan', country: 'Italy'},
	{season: '1999-00', team: 'Porto', country: 'Portugal'},
	{season: '1999-00', team: 'Real Madrid', country: 'Spain'}
];

function countWins(winnerList1, c) {
	return reduce(winnerList1,function(total,team){
		if(team["country"] === c ){
			return total = total + 1;
		}
		return total;
	},0)
}

function authList(arr) {
	var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?_]/); //unacceptable chars
	return every(arr,function(result,str){
		return result && (str.length>=6 && str.length<=10) && (str === str.toLowerCase()) && /\d/.test(str) && /[a-z]/.test(str) && !pattern.test(str);
	})
  
}


//basic requirements:
var counter1 = makeCounter(10);
var counter2 = makeCounter(5);

function makeCounter (initial){
	var startPoint = initial;
	var count = initial;
	return {
		reset: function () {
			return count = startPoint;
		},
		counter: function() {
    	count+= 1;
    	return count;
		}
	}
}

var square = pow(2);
var qube= pow(3);
var powOf4 = pow(4);
function pow(exp){
	return function (base){
		return Math.pow(base,exp);
	}
}

function zipWith(func,arr1,arr2){
	var result =[];
	if(arr1.length<arr2.length){
		var shortest = arr1.length;
	}else{
		var shortest = arr2.length;
	}
	for (var i = 0; i <  shortest; i++) {
		 result.push(func(arr1[i],arr2[i]))
	}
	return result;
}

// function add (x) {
//     return function(y) {
//         if (typeof y !== 'undefined') {
//             x = x + y;
//             return arguments.callee;
//         } else {
//             return x;
//         }
//     };
// }

// function add() {
//     var slice = Array.prototype.slice,
//         sum = 0,
//         closure = function() {
//             var cargs = slice.call(arguments);
//             for (var i = 0, l = cargs.length; i < l; i++) {
//                 sum += cargs[i]*1;
//             }
//             return cargs.length ? closure : sum;
//         };
//     return closure.apply(null, slice.call(arguments));
// }


// function add(a, b) {
//     if(typeof b === "undefined")
//         return function(c) {
//         	if(typeof c !== "undefined"){
//         		a+= c
//         		return arguments.callee;
//         	}else{
//         	return a; 
//         	}
//         }
//     return a + b
// }

function add(x){
  return function(y){
   while(y!==undefined){
    x += y;
    return add(x) 
  }
  return x;
	}
}

function upperCaseValues(obj){
	return map(obj,function(value,key){
		if(typeof value === "string"){
			return value.toUpperCase();
		} else{
			return value;
		}
	})
}

function sumReduce(arr){
	return reduce(arr,function(sum,value){
		return sum+= Math.pow(value,2);
	},0);
}

function makeStd(name,age,specialization,phone,grade){
	if(grade<1 || grade>4){
		return "please enter grade between 1-4";
	} else{
		return {
			name:name,
			age:age,
			specialization:specialization,
			phone:phone,
			grade:grade
		}
	}
}
function editStd(obj,name,age,specialization,phone,grade){
	if(grade<1 || grade>4){
	return "please enter grade between 1-4";
	} else {
	obj.name = name;
	obj.age = age;
	obj.specialization = specialization;
	obj.grade = grade;
	}
}

function displayStd(obj){
	each(obj,function(value,key){
		console.log(key + " : " + value);
	})
}

function toCamelCase(str){
	var arrOfStr = str.split("");
	for (var i = 0; i < arrOfStr.length; i++) {
		if(arrOfStr[i] === "-" || arrOfStr[i] === "_"){
			arrOfStr.splice(i,1);
			arrOfStr.splice(i,1,arrOfStr[i].toUpperCase())
		}
	}
	return arrOfStr.join("");
}

function convertMagic(str){
	str = str.toLowerCase();
	var result = [];
	for (var i = 0; i < str.length; i++) {
		if ( (str.split(str[i]).length-1) > 1 ){
			result.push(")")
		} else{
			result.push("(");
		}
	}
	return result.join("");
}

function Gym(){
	var admin = {};
	admin.accounts=[];
	admin.session;
	admin.addPlayer=addPlayer;
	admin.checkInOut=checkInOut;
	admin.isPlaying=isPlaying;
	admin.calcDuration=calcDuration;
	return admin;
}

var addPlayer = function (name,address){
	this.accounts.push({
		name:name,
		address:address,
		workingTime:0,
		level:1,
		startingDate:Date().split(" ").slice(0,4).join("-"),
		workOut:false
	})
	return "Welcome " + name + ", your account has been created sucessfully ";
}

var checkInOut = function(name){
	each(this.accounts,function(player){
		if(player.name === name){
			player.workOut = !player.workOut;
			if(player.workOut === true){
				this.session = setInterval(function(){
					player.workingTime+=1;
					if(player.workingTime%50 === 0){player.level+=1;}
				},1000)
			}else{
				clearInterval(this.session);
			}
		}
	})
}

var isPlaying = function(name){
	each(this.accounts,function(player){
		if(player.name === name){
			(player.workOut === true) ? console.log("player is working out") : console.log("player has finished");
		}
	})
}

var calcDuration = function(){
	each(this.accounts,function(player){
		console.log(player.name + " : " + Math.floor(player.workingTime/60) + " minutes and " + player.workingTime%60 + " seconds");
	})
}

function unique(str) {
  var result = '';
  for(var i = 0; i < str.length; i++) {
    if(result.indexOf(str[i]) < 0) {
      result += str[i];
    }
  }
  return result;
}

function longest(str1,str2){
	var all = str1+str2;
	return unique(all.toLowerCase().split("").sort().join(""));
}

function counterRegion(num1,num2){
	var cnt= 0;
	for (var i = num1; i <= num2; i++) {
		if(i.toString().indexOf("5") === -1){
			cnt+=1;
		}
	}
	return cnt;
}

function passStrength(str){
	var symbols = new RegExp(/[~`!#$@%\^&*+=\-\[\]\\';,/{}|\\":<>\?_]/);
	var strength = 0;
	if(str.length >= 8) {strength+=1;}
	if(/[a-z]/.test(str) && /[A-Z]/.test(str)) {strength+=1;}
	if(/\d/.test(str)) {strength+=1;}
	if(symbols.test(str)) {strength+=1;}
	switch (strength){
		case 0:
			console.log("Invalid password, please try again");
			break;
		case 1:
			console.log("Weak password");
			break;
		case 2:
			console.log("your password is medium");
			break;
		case 3:
			console.log("your password is strong");
			break;
		case 4:
			console.log("your password is very strong");
			break;
	}
}


function humanReadable(seconds) {
	if(seconds >= 360000){return "you reach the maximum clock capability\n 99:59:59 "}
	var hours = Math.floor(seconds/3600);
	var minutes = Math.floor((seconds - hours*3600)/60);
	var seconds = seconds - (hours*3600 + minutes*60);
	return ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
}

function findOdd(a) {
	var check = 0;
	var sortedArr = a.sort();
	for (var i = 0; i < sortedArr.length; i++) {
		if(sortedArr[i] === sortedArr[i+1]){
			check+=1;
		}else{
			if((check+1)%2 !== 0){
				return sortedArr[i];
			}else{
				check = 0;
			}
		}
	}
}

function greatestCommonDivisor(x,y){
  var m = Math.min(x,y)
  for (var i =m ; i > 0; i--) {
    if (x%i===0&&y%i===0){
      return i;
    }
  }
return null;
}

function findEvenIndex(arr){
var leftBound = 0;
var rightBound = arr.slice(1).reduce(function(a,b){ return a + b; });
  arr.forEach(function(num,ind){
    if(leftBound === rightBound){
    return ind;
    }
    leftBound+=num;
    rightBound-=arr[ind+1];
  });
  return -1;
}

Array.prototype.unique = function(){
var result = [];
 	this.forEach(function(char){
 		if(result.indexOf(char) === -1){
 			result.push(char);
 		}
 	})
return result;
}

function longesta(str1,str2){
	return str1.concat(str2).toLowerCase().split("").sort().unique().join("");
}

function pigLatin(string){
var regex = /[aeiou]/gi; 
var pigWord = '' ;
	if(string.match(/[0-9]/gi)){
	return null;
	}
	if(string[0].match(regex)){
	pigWord = string + "way"
	} else if(string.match(regex)===null){
	pigWord = string + "ay";
	}else{
	var vowelIndice = string.indexOf(string.match(regex)[0]);
	pigWord = string.substr(vowelIndice) + string.substr(0, vowelIndice) + 'ay';
	}

return pigWord.toLowerCase() ;
}

function narcissistic( value ) {
  var actualValue = 0;
  var exp = value.toString().length;
  for (var i = 0; i<exp; i++){
    actualValue+= Math.pow(value.toString().split("")[i],exp);
  }
  if(value === actualValue){
    return true;
  }else{
    return false;
  }
}

function likes(arr){
	var numOfLikes = arr.length;
	switch(numOfLikes){
		case 0:
			return "no one likes this";
			break;
		case 1:
			return arr[0] + " likes this";
			break;
		case 2:
			return arr[0] + " and " + arr[1] + " like this";
			break;
		case 3: 
			return arr[0] + ", " + arr[1] + " and " + arr[2] + " like this";
			break;
		default:
			return arr[0] + ", " + arr[1] + " and " + (numOfLikes-2) + " others like this";
	}
}

function semoEnc(str,shift){
	var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var arrOfChar = str.toUpperCase().split("");
	return arrOfChar.map(function(value,index){
		if(alpha.indexOf(value)!==-1){
			value = alpha.charAt((alpha.indexOf(value)+shift)%26);
			(index%2===0) ? value = value.toUpperCase() : value = value.toLowerCase();
			return value;
		}else if(!isNaN(parseInt(value))){
			return 9-value;
		}else{
			return value;
		}
	}).reverse().join("");
}

function list(names){
	var namesCount = names.length;
	switch(namesCount){
		case 0 :
			return "";
		case 1 :
			return names[0]['name'];
		default:
			return names.reduce(function(res,value,index){
				if(index < names.length-2){
					return res +  value.name + ", ";
				}else if(index < names.length-1){
					return res + value.name + " & ";
				}else{
					return res + value.name;
				}
			},"");
	} 
}

var swap = function (array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
};

var heapsPermute = function (array, n) {
  n = n || array.length; // set n default to array.length
  if (n === 1) {
    return array;
  } else {
    for (var i = 1; i <= n; i += 1) {
      heapsPermute(array, n - 1);
      if (n % 2) {
        var j = 1;
      } else {
        var j = i;
      }
      swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
    }
  }

};

// var moveZeros = function (arr) {
// 	var arrOfZeros = [];
// 	while (arr.indexOf(0)!==-1){
// 		arr.forEach(function(val,ind){
// 			if(val===0){
// 				arrOfZeros.push(val);
// 				arr.splice(ind,1);
// 			}
// 		});
// 	}
// 	return arr.concat(arrOfZeros);
// }

var moveZeros = function (arr) {
	return arr.filter(function(value){
		return value!==0;
	}).concat(arr.filter(function(value){
		return value===0;
	}));
}

function palindromeChainLength(num){
	var steps = 0;
	var revNum = parseInt(num.toString().split("").reverse().join(""));
	while(num !== revNum){
		num = num + revNum;
		revNum = parseInt(num.toString().split("").reverse().join(""));
		steps+=1;
	}
	return steps;
}

function removeNb (n) {
	var result = [];
	var sequence = [];
	var total = 0;
	var sum,product;
	for (var i = 1; i <= n; ++i) {
		sequence.push(i);
		total+=i;
	}
	sequence.forEach(function(val1){
		sequence.forEach(function(val2){
			sum = total - val1 - val2;
			product = val1*val2;
			if(product===sum){result.push([val1,val2]);}
		});
	});
	return result;
}

function firstNonRepeatingLetter(s) {
  for (var i = 0; i < s.length; i++) {
  	var tmp = s.slice(0,i) + s.slice(i+1,s.length);
  	if(tmp.toLowerCase().indexOf(s[i].toLowerCase())===-1){ return s[i]; }
  }
  return "";
}

function rgb(r, g, b){
	hexR = r.toString(16).toUpperCase();
	hexG = g.toString(16).toUpperCase();
	hexB = b.toString(16).toUpperCase();
	return (r>255 ? "FF" : r<0 ? "00" : ("0" + hexR).slice(-2)) + 
		   (g>255 ? "FF" : g<0 ? "00" : ("0" + hexG).slice(-2)) + 
		   (b>255 ? "FF" : b<0 ? "00" : ("0" + hexB).slice(-2));
}

function sumStrings(a,b) { 
	var arrA= a.split("") , arrB = b.split("");
	var result = [];
	var diff =  Math.abs(arrA.length-arrB.length);
	var short = (arrA.length < arrB.length) ? arrA : arrB;
	for (var i = 0; i < diff; i++) {
		short.unshift(0);
	}
	for (var i = arrA.length-1; i >= 0; i--) {
		var sum = parseInt(arrA[i]) + parseInt(arrB[i]);
		if(sum>9 && i!==0){
			result.unshift(sum.toString()[1]);
			arrA.splice(i-1,i,parseInt(sum.toString()[0]) + parseInt(arrA[i-1]));
		}else{
			result.unshift(sum);
		}
	}
	return result[0]===0 ? result.slice(1).join("") : result.join("");
}


