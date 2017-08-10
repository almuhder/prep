var box = {};
box.material = 'metal';

var myBox = {
    'meterial': 'cardboard'
};

console.log(box.material);


//Use Dots notation for :
// - add a property
// - edit a property


// barackets notation
var box1 = {};
box1['material'] = 'metal';
var key = "material";
box1['key']; // undefined
box1[key]; // metal
box.key; // undefined
