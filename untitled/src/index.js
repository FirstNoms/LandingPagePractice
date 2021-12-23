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
person['name'] = 'nana';