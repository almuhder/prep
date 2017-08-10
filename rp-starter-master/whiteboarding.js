// Print numbers from n to zero (Only even numbers)

// EDGE CASES 
// INPUT IS NOT NUMBER

function even(start) {

	if (typeof start !== 'number'){
		console.log('invalid input');
		return ;
	}

	if (start < 0){
		console.log(' out of bound!');
		return;
	}

	for( var n = start ; n >= 0 ; n--){
		if(n % 2 === 0)
			console.log(n)
	}
}

even('String value');
even(0);