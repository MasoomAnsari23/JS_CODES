const user1={
   firstName:"masoom",
   age:20,
   about:function(){
    console.log(this.firstName,this.age);
   }
}

const user2={
    firstName:"ansari",
    age:19,
}

console.log(user1.firstName);
console.log(user1.about); // print complete function

//using call method
user1.about.call(user1);
user1.about.call(user2);
user1.about.call(); // underfined because here 'this' is not defined


// making function as global 

function about(){
  console.log(this.firstName,this.age);
}

const user3={
    firstName:"asif",
    age:16,
}

const user4={
    firstName:"ansari",
    age:14,
}

about.call(user3);
about.call(user4);
about.call(user1);
about.call(user2);

//adding extra argument
function extra(hobby,death){
    console.log(this.firstName,this.age, hobby, death);
}

const user5={
    firstName:"sajjad",
    age:18,
}

const user6={
    firstName:"sahid",
    age:22,
}

extra.call(user5,"idk","unknown");
extra.call(user1,"i know", "fate");
extra.call(user2,"fate", "fate");
extra.call(user3,"well honestly", "fate");
extra.call(user4,"who cares", "fate");
extra.call(user6,"i think i know", "but idk");