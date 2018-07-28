//  argument object - no longer bound  with arrow function :

const add = function(a, b){
    console.log(arguments);
    return a+b;

};
console.log(add(5,6))


const add_2 = (a,b)=>{
    // console.log(arguments);
    // we get error here in arrow function, argument object no longer bound with arrow function
    return a+b;
} 

console.log(add_2(7,8));



// this keyword - no ,oonger bound with arrow function

// const user = {
//     name : 'Gautam',
//     cities : ['begusarai', ' pune', 'kota'],

//     printPlacedLived_2(){
//         return this.cities.map((city) => this.name + ' has lived in '+city);
        
//     }
    
   
//     // printPlacesLived(){
//     //     this.cities.forEach((city) =>{
//     //         console.log(this.name + ' has lived in '+city);
//     //     });
//     // }

// };

// console.log(user.printPlacedLived_2);


const multiplier = {
    numbers :[10,20,30],
    multiplyBy : 10, 
    multiply(){
        return this.numbers.map((number)=> number * this.multiplyBy);
    }
};

console.log(multiplier.multiply())
 




