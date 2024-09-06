//if else

let age=10;
if(age>=18){
    console.log("adult");
}
else{
    console.log("child");
}

//even odd
let num=23;
if(num%2==0){
    console.log("even number")
}
else{
    console.log("odd number")
}

//ternary operator
let Age=23;
let drink=age>=5 ? "coffee" : "milk";
console.log(drink);

//and , or operator
let firstName="masoom";
let lastName="ansari";
if(firstName[0]=="m" && lastName[0]=="a"){
    console.log("you are great man")
}
else if(firstName[0]=="m" || lastName[0]=="a"){
    console.log("you are good")
}
else{
    console.log("i don't know");
}

//nested if else
//winner no 23, 19 is too low, 25 is too high
let winningNumber=23;
let userguess=promt("guess the number");
console.log(typeof userguess, userguess);
if(userguess==winningNumber){
    console.log("right guess")
}
else{
    
}
