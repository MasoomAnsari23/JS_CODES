// plating with object oriented

//method:function inside object is called method
const person1={
    name:"masoom",
    age:22,
    about:function(){
        console.log(`name is ${this.name} and age is ${this.age}`);//we must use this. in template otherwise it will not work
    }
}
person1.about();

//global function and this 
function personinfo(){
    console.log(`name is ${this.name} and age is ${this.age}`);
}

const person2={
    name:"asif",
    age:18,
    about:personinfo
}

const person3={
    name:"sajjad",
    age:21,
    about:personinfo
}

const person4={
    name:"sahid",
    age:24,
    about:personinfo
}

person2.about();
person3.about();
person4.about();


//call method
// const person1={
//     name:"masoom",
//     age:22,
//     about:function(){
//         console.log(`name is ${this.name} and age is ${this.age}`);//we must use this. in template otherwise it will not work
//     }
// }
  const person5={
    name:"ansari",
    age:24
  }
  person1.about.call(person5); //call method used with person1
  person1.about.call(person1);

  //call and some parameter
  const person6={
    name:"asho",
    age:3,
    about:function(gender,nature){
        console.log(this.name ,this.age,gender,nature);
    }
  }
 const person7={
    name:"kausen",
    age:12,
 }
 person6.about.call(person6,"female","neutral");
 person6.about.call(person7,"female","happy");


 //apply method
 //it just take parameter as array insteas of random.
 const person8={
    name:"ashiya",
    age:3,
    about:function(gender,nature){
        console.log(this.name ,this.age,gender,nature);
    }
  }
 const person9={
    name:"naushin",
    age:7
 }
 person6.about.apply(person8,["female","neutral"]);
 person6.about.apply(person9,["female","happy"]);


 //bind method
 //it returns function and we can access by storing in some variable
 const person10={
    name:"anash",
    age:15,
    about:function(gender,nature){
        console.log(this.name ,this.age,gender,nature);
    }
  }
 const person11={
    name:"ammar",
    age:17
 }
 const myfunc=person10.about.bind(person11,"male", "brave");
myfunc();

//arrow function don't have its own this


