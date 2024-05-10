//apply is almost same as call method here while passing extra argument we need to pass in form of array

function about(hobby,death){ // hobby and death are extra argument
    console.log(this.firstName,this.age, death , hobby)
}

const user1={
    firstName:"masoom",
    age:20,
}

const user2={
    firstName:"ansari",
    age:19,
}

about.call(user1,"nothing", "already happened");
about.apply(user1,["nothing","already happened"]);
about.call(user2,"idk", "i guess it doesnt matter");
about.apply(user2,["idk","i guess it doesnt matter"]);
