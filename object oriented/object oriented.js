// // plating with object oriented

// //method:function inside object is called method
// const person1={
//     name:"masoom",
//     age:22,
//     about:function(){
//         console.log(`name is ${this.name} and age is ${this.age}`);//we must use this. in template otherwise it will not work
//     }
// }
// person1.about();

// //global function and this 
// function personinfo(){
//     console.log(`name is ${this.name} and age is ${this.age}`);
// }

// const person2={
//     name:"asif",
//     age:18,
//     about:personinfo
// }

// const person3={
//     name:"sajjad",
//     age:21,
//     about:personinfo
// }

// const person4={
//     name:"sahid",
//     age:24,
//     about:personinfo
// }

// person2.about();
// person3.about();
// person4.about();


// //call method
// // const person1={
// //     name:"masoom",
// //     age:22,
// //     about:function(){
// //         console.log(`name is ${this.name} and age is ${this.age}`);//we must use this. in template otherwise it will not work
// //     }
// // }
//   const person5={
//     name:"ansari",
//     age:24
//   }
//   person1.about.call(person5); //call method used with person1
//   person1.about.call(person1);

//   //call and some parameter
//   const person6={
//     name:"asho",
//     age:3,
//     about:function(gender,nature){
//         console.log(this.name ,this.age,gender,nature);
//     }
//   }
//  const person7={
//     name:"kausen",
//     age:12,
//  }
//  person6.about.call(person6,"female","neutral");
//  person6.about.call(person7,"female","happy");


//  //apply method
//  //it just take parameter as array insteas of random.
//  const person8={
//     name:"ashiya",
//     age:3,
//     about:function(gender,nature){
//         console.log(this.name ,this.age,gender,nature);
//     }
//   }
//  const person9={
//     name:"naushin",
//     age:7
//  }
//  person6.about.apply(person8,["female","neutral"]);
//  person6.about.apply(person9,["female","happy"]);


//  //bind method
//  //it returns function and we can access by storing in some variable
// //  const person10={
// //     name:"anash",
// //     age:15,
// //     about:function(gender,nature){
// //         console.log(this.name ,this.age,gender,nature);
// //     }
// //   }
// //  const person11={
// //     name:"ammar",
// //     age:17
// //  }
// //  const myfunc=person10.about.bind(person11,"male", "brave");
// // myfunc();

// //arrow function don't have its own this


// //short syntax
// const person10={
//     name:"anash",
//     age:15,
//     // about:function(){
//     //     console.log(this.name ,this.age,gender,nature);
//     // }
// // insted of writing about like that we can use short syntax for method
//  about(gender,nature){
//      console.log(this.name, this.age);
// }
// }
// person10.about();


// //creating object using function
// function createuser(firstname, age){
//     const user={};
//     user.firstname;
//     user.age;
//     user.about=function(){
//       return `name is ${this.firstname} and age is ${this.age}`;
//     }
//     return user;
// }

// const user1=createuser('masoom',22);
// const About=user1.about();
// console.log(About);

// //linking one function to another using protype link
// const object1={
//     name:"masoom",
//     age:22
// }

// const object2=Object.create(object1)
// console.log(object1);
// console.log(object2);//its null object
// console.log(object2.name);//name is present in object1 not in object2
// console.log(object2.age);

// const usermethod={
//     about:function(){
//         return `${this.name} and age is ${this.age} years old`
//     }
// }

// function createuser(name,age){
// const user=Object.create(usermethod);
// user.name=name;
// user.age=age;
// return user;
// }

// const user23=createuser("masoom",22);
// const user24=createuser("sajjad",21);
// const user25=createuser("sahid",24);
// const user26=createuser("asif",18);
// console.log(user23);
// console.log(user24);
// console.log(user25);
// console.log(user26);


// //new keyword
// function createuser(firstname,age){
//     this.firstname=firstname;
//     this.age=age;
// }

// createuser.prototype.about=function(){
//     console.log(this.firstname,this.age);
// }
// const user1=new createuser("masoom",23);
// console.log(user1);
// user1.about();


//example 2
function createuserr(name,age,address){
    this.name=name;
    this.age=age;
    this.address=address;
}

createuserr.prototype.about=function(){
    return `name is ${this.name} and age is ${this.age}`
}

