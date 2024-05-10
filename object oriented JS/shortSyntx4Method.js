const user1={
   firstName:"masoom",
   age:20,
   about:function(){
    console.log(this.firstName,this.age);
   }
}
user1.about();

//short method
const user2={
    firstName:"ansari",
    age:20,
    about(){
        console.log(this.firstName,this.age);
    }
}

user2.about();