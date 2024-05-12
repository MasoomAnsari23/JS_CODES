const hello=function(){
    console.log("free palastine");
}
hello(); // calling function

console.log(hello.prototype); // this empty object provided by function is prototype

//adding property in prototype
hello.prototype.gaza="love gaza";
console.log(hello.prototype);
 
//adding function in prototype
hello.prototype.hamas=function(){
    return "hamas are freedom fighter"
}
console.log(hello.prototype.hamas);

//only function provides prototype property
const obj={
    key1:"value1"
};
if(obj.prototype){
    console.log("prototype is present");
}
else{
    console.log("prototype is not present");
}
console.log(obj); //not present


//now for function hello
if(hello.prototype){
    console.log("prototype is present");
}
else{
    console.log("prototype is not present");
}
console.log(hello) // present
