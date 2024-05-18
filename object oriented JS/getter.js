class person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    get fullName(){ // here we wrote get which helps to write method as property
        return `${this.firstName} ${this.lastName}`;
    }
};

const person1=new person("masoom","ansari",'20');
console.log(person1.firstName);
console.log(person1.fullName); // here we are using fullname as property without paraenthesis