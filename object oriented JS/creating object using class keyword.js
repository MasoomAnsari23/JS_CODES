class createUser{
    constructor(firstName,lastName,age,address){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.address=address;
    }

about(){
    return `${this.firstName} is ${this.age} years old and he is from ${this.address}`
}

is18(){
    return this.age>=18
}
}

const user1=new createUser('masoom','ansari','20','jannah');
const user2=new createUser('asif','ansari','16','jannah');

console.log(user1);
console.log(user2);
console.log(user1.about());
console.log(user1.is18());
console.log(user2.about());
console.log(user2.is18());
