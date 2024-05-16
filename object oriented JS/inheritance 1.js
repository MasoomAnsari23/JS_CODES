class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    about(){
        return `${this.name} belongs to animal kingdom and age of this animal is ${this.age}`;
    }

    isdead(){
         return this.age>=7;
        }
}

class dog extends animal{ //this is syntax of inheritance

}

const animal1=new animal('cat','4');
const animal2=new animal('rabbit','7');

console.log(animal1);
console.log(animal2.about());  
const tommy=new dog('tommy',5);  
console.log(tommy);
console.log(tommy.about());  //this is inheritance
console.log(tommy.isdead()); //this is inheritance
