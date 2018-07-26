class Person {
    constructor(name, country){
        this.name = name;
        this.country = country;
    }
    greet(){
        console.log(`Hi, I'm ${this.name} from ${this.country} `);
    }
}

const newPerson = new Person('Frank', 'Uganda');
newPerson.greet();

export default Person;