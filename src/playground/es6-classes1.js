
// setup constructor to take age , with default value = 0
// create method getDescription , that returns "gautam is 24 year old"
class Person{

    constructor(name = 'anonymous', age=0){
        this.name=name;
        this.age = age;
        // console.log(name);
    };

    getGriting(){
        // return 'hi '+this.name+' !';
        return `hi i am ${this.name} `
    }

    getDescription(){
        return `${this.name} is ${this.age} old `
    }

}

// creating subclasses
class Student extends Person{
    constructor (name, age, major='Undecided' ){
        super(name, age);
        this.major = major;

    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor){
            description += ` There major is ${this.major} .`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age,  homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGriting(){
        let greeting = super.getGriting();

        if(this.getGriting){
            greeting += `i am visiting from ${this.homeLocation}`
        }
        console.log(greeting)

    }
}

// const me = new Student('gautam', 23, 'Computer Science');
// console.log(me);
// console.log(me.getGriting())
// console.log(me.getDescription())
// console.log(me)

// const other = new Student();
// console.log(other.getDescription());
// console.log(other)

const mee = new Traveler('gautam', 23, 'pune');
console.log(mee);
console.log(mee.getGriting())


const others = new Traveler();
console.log(others.getGriting());
console.log(others)