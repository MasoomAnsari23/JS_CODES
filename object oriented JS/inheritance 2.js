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
    run(){
        return `tommy is running with speed of ${this.speed} kmph`;
    }
}

const tommy=new dog('tommy',4,45);
console.log(tommy);
console.log(tommy.about());
console.log(tommy.run());