// forEach method
const numbers=[2,4,6,8,10];
function display(number, index){
  console.log(`number is ${number} and index is ${index}`);
  console.log(`number is ${number*2}`);
}
numbers.forEach(display);
const users=[
    {firstname:"masoom", age:22},
    {firstname:"sahid", age:24},
    {firstname:"sajjad", age:20},
    {firstname:"asif", age:17}
];

users.forEach(function(user){
    console.log(user.firstname);
});
  