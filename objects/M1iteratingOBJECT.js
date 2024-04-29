let obj1={
    name:"sahid",
    age:23,
    class:"undergraduate",
}

console.log(obj1);

//method 1: using for in loop

for(let about in obj1){
    console.log(about);  //accessing index value
}

for(let about1 in obj1){
    console.log(obj1[about1]);//accessing values of index
}

for(let about2 in obj1){
    console.log(`${about2}:${obj1[about2]}`);//accessing index value and values
}