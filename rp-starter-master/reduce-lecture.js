var each = function(coll, f) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			f(coll[i], i);
		}
	} else {
		for (var key in coll) {
			f(coll[key], f);
		}
	}
}


function reduce(array, f, start) {
	var acc = start;
	each(array, function(elment, ) {
		return acc = f(acc, elment);
	});
	return acc;
}


var sum = function(array) {
	return reduce(array, function(total, elment) {
		return total += elment;
	}, 0);
}
console.log(sum([1, 2, 3, 4, 5]));