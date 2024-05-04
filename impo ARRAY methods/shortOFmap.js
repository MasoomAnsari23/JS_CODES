const arr1 = [
    { name: "masoom", age: 20 },
    { name: "asif", age: 16 },
    { name: "sajjad", age: 18 },
    { name: "sahid", age: 22 }
]

const result=arr1.map(function(darling){
    return darling.name;
});
console.log(result);


// example 2 for practice
const arr2=[
    { name: "masoom", age: 20 },
    { name: "asif", age: 16 },
    { name: "sajjad", age: 18 },
    { name: "sahid", age: 22 }
]

const resultt=arr2.map(function(hero){
    return hero.age;
});
console.log(resultt);