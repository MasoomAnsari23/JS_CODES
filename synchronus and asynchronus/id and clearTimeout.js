//id is returned by setTimeout() function and can be used to avoid printing stuff of setTimeout()

console.log("love gaza");

const id=setTimeout(()=>{
    console.log("israel dones not exist");
},1000);

for(let i=0;i<1000;i++){
    console.log("freedom to palastine");
}

console.log("id of settimeout is ",id);
clearTimeout(id);//this will avoid printing thigs of setTimeout function
console.log("love palastine");
