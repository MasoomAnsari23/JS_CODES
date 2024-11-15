const bucket=["rice","vegetable","salt","chips"];
const mypromise=new Promise((resolve,reject)=>{
    if(bucket.includes("rice") && bucket.includes("vegetable") && bucket.includes("salt")){
        resolve("fried rice");
    }else{
        reject("sorry no fried rice");
    }
})

// mypromise.then((friedRice)=>{
//     console.log("lets eat ",friedRice);
// },
// (error)=>{
// console.log(error);
// })

//then and cath
mypromise.then((friedrice)=>{
    console.log("lets eat",friedrice);
}).catch((error)=>{
console.log(error);
})