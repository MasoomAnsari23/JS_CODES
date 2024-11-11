//it is asynchronus because it is not blocking furture code to run

console.log("love gaza");

setTimeout(() => {
    console.log("free palastine");//it will print in last because event loop will stop it till GEC is free.
}, 0);

for(let i=0;i<1000;i++){
    console.log("stop genocide")
}

console.log("love palastine");