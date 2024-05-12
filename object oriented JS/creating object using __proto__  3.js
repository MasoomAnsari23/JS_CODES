const userMethod={
    about:function(){
        return `my name is ${this.firstName} and i am ${this.age} yeras old`
    },
    is18:function(){
        return this.age>=18;
    }
}

function createUser(firstName,lastName,age,address){
    const user=Object.create(userMethod);

    user.firstName=firstName;
    user.lastName=lastName;
    user.age=age;
    user.address=address;
    return user;
}

const user1=createUser('masoom','ansari','20','lohardaga');
const user2=createUser('asif','ansari','16','ranchi');
console.log(user1);
console.log(user2);
console.log(user1.about());
console.log(user1.is18());
console.log(user2.about());
console.log(user2.is18());
