import Person from './person'

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
export default Teacher;
