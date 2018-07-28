const squere = function (x){
    return x*x;
};

console.log(squere(8));


// const squareArrow = (x)=> {
//     return x*x;
// }

const squareArrow = (x) => x*x ; 
console.log(squareArrow(9));


// challange : use arrow function
// get_first_name(gautam kumar)

const fullName = 'gautam kumar';

const firstName = (x) => x.split(' ')[0]

console.log(firstName(fullName))