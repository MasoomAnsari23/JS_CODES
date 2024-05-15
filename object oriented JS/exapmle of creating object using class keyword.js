class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

about(){
    return `${this.name} is a annimal of ${this.age} years old`;
}

is5(){
    return this.is5>=this.age;
}
}

const animal1=new animal ('rabbit','6');
const animal2=new animal ('cat','4');

console.log(animal1);
console.log(animal2);
console.log(animal1.name);
console.log(animal1.about());
console.log(animal2.about());
console.log(animal1.is5());
console.log(animal2.is5());
