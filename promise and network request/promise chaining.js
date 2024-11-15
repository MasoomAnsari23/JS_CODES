function mypromise(){
    return new Promise((resolve,reject)=>{
        resolve("free");
    })
}

mypromise().then((value)=>{
    console.log(value);
    value+=" gaza";
    return value;
}).then((value)=>{
    console.log(value);
    value+=" free palastine";
    return value;
}).then((value)=>{
    console.log(value);
})
