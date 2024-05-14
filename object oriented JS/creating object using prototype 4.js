function createUser(firstName,lastName,age,address){
    const user=Object.create(createUser.prototype);

    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.address;
    return user;
}

console.log(createUser.prototype);
createUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old and he is from ${this.address}`
};

createUser.prototype.is18=function(){
    return this.age>=18;
}

const user1=createUser('masoom','ansari','20','jannah');
const user2=createUser('asif','ansari','16','jannah');

console.log(user1);
console.log(user2);
console.log(user1.about());
console.log(user2.about());
console.log(user1.is18());
console.log(user2.is18());