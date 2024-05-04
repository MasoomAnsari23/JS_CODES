const users=[
    {name:"masoom", age:20},
    {name:"asif",age:16},
    {name:"sahid",age:22},
    {name:"sajjad",age:18},
]

//method 1
function myfunc(users){
    console.log(users);
}

users.forEach(myfunc);

//method 2
users.forEach(function(users){
    console.log(users.name);
    console.log(users.age);
})