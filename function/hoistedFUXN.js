sing();    //in normal function we call call before declaration
function sing(){
    console.log("happy birthday")
}
sing();


// case of function expression

// Esing();  //calling before declaration is error 
let Esing=function(){
    console.log("happy birthday")
}
Esing();

// case of arrow function
// EXsing();  //calling before declatation is error
let EXsing=()=>{
    console.log("happy birthday");
}
EXsing();