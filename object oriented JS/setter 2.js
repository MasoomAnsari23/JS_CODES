class person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    get fullName(){
        return `${this,this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        const [firstName,lastName]=fullName.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

const person1=new person("masoom","ansari",20);
console.log(person1);
console.log(person1.fullName);

person1.fullName="asif ansari";
console.log(person1.fullName);
console.log(person1.firstName);
console.log(person1.lastName);