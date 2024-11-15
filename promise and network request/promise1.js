//promise 1
const bucket=["rice","vegitable","salt","chips"];
const friedRicePromise=new Promise((resolve,reject)=>{
    if(bucket.includes("rice") && bucket.includes("vegitable") && bucket.includes("salt")){
        resolve("friend rice");
    }else{
        reject("sorry no friend rice");
    }
})

//promise consume
friedRicePromise.then((friendrice)=>{
    console.log("lets eeat", friendrice);
},
(error)=>{
    console.log(error);
})

// //revision
// const bucket=["rice","vegitable","saltt","chips"];

// const friedRicePromise=new Promise((resole,reject)=>{
//     if(bucket.includes("rice") && bucket.includes("vegitable") && bucket.includes("salt")){
//         resole("fried rice");
//     }else{
//         reject("sorry no fried rice");
//     }
// })

// //proomise consume
// friedRicePromise.then((friedrice)=>{
// console.log("lets eat" , friedrice);
// },(error)=>{
// console.log(error);
// })