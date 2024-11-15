function mypromise(){
    return new Promise((resolve,reject)=>{
        const value=false;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },3000)
    })
}

mypromise().then(()=>{console.log("resolved")})
            .catch(()=>{console.log("rejected")});