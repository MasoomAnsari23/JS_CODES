//function inside object is method

// const person={
//     firstName:"masoom",
//     age:20,
//     about:function(){
//         console.log(`name is ${this.firstName} and age is ${this.age}`);
//     }
// }
// console.log(person.firstName);
// console.log(person.about); // prints complete function
// person.about();// this will print great result 
  

//another best thing of method 
function info(){
    console.log(`Name is ${this.firstName} and age is ${this.age}`);
}

const person1={
    firstName:"masoom",
    age:20,
    about:info
}

const person2={
    firstName:"asif",
    age:16,
    about:info
}

const person3={
    firstName:"sajjad",
    age:18,
    about:info
}

const person4={
    firstName:"sahid",
    age:22,
    about:info
}

console.log(person1.firstName);
person1.about();
person2.about();  //function works as global variable
person3.about();
person4.about();