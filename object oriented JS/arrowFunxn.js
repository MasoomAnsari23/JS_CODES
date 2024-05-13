// arrow function don't have its own 'this'.
//it takes 'this' from its surrounding.
//we have to write one step up 'this'.

const user1={
    firstName:"masoom",
    age:20,
    about:()=>{
        console.log(firstName,age)
    }
}
user1.about();