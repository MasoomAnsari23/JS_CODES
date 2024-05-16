class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    about(){
        return `${this.name} is a animal of ${this.age} years old`;
    }

    is5(){
        return this.age>=5;
    }
}

class dog extends animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }

    about(){
    return `${this.name} is a modified animal of ${this.age} years old`;
    }

    run(){
        return `${this.speed} is speed of animal`;
    }
}

const tommy=new dog('tommy',5,56);
const cat=new animal('cat',4,34);
console.log(tommy);
console.log(tommy.about()); //here it will print about of child class not of parent class
console.log(tommy.is5());
console.log(tommy.run());

console.log(cat);
console.log(cat.about());
console.log(cat.is5());
//console.log(cat.run());  this is not define in parent class