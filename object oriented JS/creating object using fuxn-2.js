//object
const userMethod={
    about:function(){
        return `${this.firstName} is ${this.age} is old and he is from ${this.address}`;
    },
    is18:function(){
        return this.age>=18;
    }
}

function createUser(firstName,lastName,email,age,address){
const user={};
user.firstName=firstName;
user.lastName=lastName;
user.email=email;
user.age=age;
user.address=address;

//storing reference or address
user.about=userMethod.about;
user.is18=userMethod.is18;

return user;
}

const user1=createUser('masoom','ansari','masoom6ansari@gmail.com','20','lohardaga');
console.log(user1);
console.log(user1.about());
console.log(user1.is18());