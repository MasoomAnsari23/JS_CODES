// let and const are block function
// var is function scope

let block=()=>{
    let fun1="masoom";
    console.log(fun1);
    {
        let fun2="ansari";
        console.log(fun2);
    }
   // console.log(fun2);// console.log(fun2); here fun2 is out of block
}

// if we try to access fun1 outside of block it can't be accessed
// console.log(fun1);  //this is error
block();


let block2=()=>{
var fun3="ansari@";
console.log(fun3);
{
    var fun4="ansari#";
console.log(fun4);
}
console.log(fun4); // here its accessible because of function scope
}
block2();