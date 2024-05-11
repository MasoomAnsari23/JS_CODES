function createUser(firstName, lastName, age,gmail,address){
    const user={}; // a vacant object
    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.gmail=gmail;
    user.address=address;

    user.about=function(){
        return`${this.firstName} is ${this.age} years old and he is from ${this.address}`
    };

    user.is18=function(){
        return this.age>=18;
    }
    return user;
}

const user1=createUser('masoom','ansari','20','masoom6ansari@gmail.com','lohardaga');
const user2=createUser('asif','ansari','16','asif6ansari@gmail.com','ranchi')
console.log(user1);
console.log(user1.about()); //here user1 and user2 taking space is memory for function about and is18
console.log(user1.is18());
console.log(user2);
console.log(user2.about());
console.log(user2.is18());