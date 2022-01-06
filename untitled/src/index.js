//var, let, const

function sayHello(){
    for (let i = 0; i < 5; i++){
        console.log(i)
    }
}

sayHello();

//Objects
const person ={
    name: 'Nomso',
    walk(){},
    talk(){}
};
person.talk();
console.log(person['name'] = 'nana');

//arrow functions
const jobs = [  
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
];
jobs.filter(function(job){}) //The "filter" function is a predicate function(a function that takes in the Instance of the object and returns a True/False),that iterates through an array of elements.

//Classes
//This is used when creating objects or replicated properties of a class.

class Person{
    constructor(name){
        this.name = name;
    }
    walk() {
        console.log("Walking with 2 legs")
    }
}
const madu = new Person("Nomso");


//>>>>Inheritance<<<<<

class Teacher extends Person{
    constructor(name, degree){
        super(name)
        this.degree =degree;
    }
    teach(){
        console.log("I teach")
    }
}
const onyenkuzi = new Teacher("Mike", "Msc")
