const obj1={
    key1:"value1",
    key2:"value2"
}

const obj2=Object.create(obj1);
//obj1 is __proto__ and when a key is not found in obj2 it will look in obj1 
console.log(obj2); // now obj2 is empty basically it is method to create empty object

obj2.key3="value3";
console.log(obj2);
console.log(obj2.key2); // here key2 is not present is obj2 but with the help of __proto__ its printing
obj2.key2="value unique";
console.log(obj2.key2); // __proto__ looks first in his own object then in referenced object
