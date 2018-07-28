var nameVar = 'gautam';
var nameVar = 'kumar';
console.log('nameVar', nameVar);

let nameLet = 'tripti';
nameLet = 'akriti';
console.log('nameLet', nameLet);

const nameConst = 'Frank ';
console.log('nameConst', nameConst); 

// var, let and const are function scope variable 

function getPetName(){
    var petName = 'tommy';
    return petName;
}

var petName = getPetName;
// console.log( petName);


// block scoping
var fullName = 'gautam kumar';

if(fullName){
    let firstName = fullName.split(' ')[0]
    console.log(firstName )
}

console.log(firstName)
// we cant print internal variable with let and const keyword
// error is reference Error