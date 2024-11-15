function friedRICE(){
    const bucket=["rice","salt","vegetable","chipss"];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("rice")&& bucket.includes("vegetable")&& bucket.includes("salt")){
            resolve("fried rice");
        }else{
            reject("sorry no fried rice");
        }
    })
}

friedRICE().then((friedRice)=>{
    console.log("lets eat ",friedRice);
}).catch((error)=>{
    console.log(error);
})
