const person= new Map();
person.set('name','masoom');
person.set('age',20);
console.log(person);

//for of loop
for(let key of person.keys()){
    console.log(key);
    console.log(key,typeof key);
    console.log(Array.isArray(key)); //some mistake is here
}

// method 2 of storing key value pairs
const person2=new Map([['name','masoom'],['age',20]]);
console.log(person2);

//storing values from object using map with additional values
const user={
    id:1,
    name:"masoom"
}

 const extraInfo= new Map();
 extraInfo.set(user,{gender:"M"});
 console.log(extraInfo);
 console.log(user.id);
 console.log(extraInfo.get(user));