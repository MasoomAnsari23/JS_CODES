function myfunc(){
    function yourfunc(){
        console.log("friends");
    }
    return yourfunc;
}

const ans=myfunc();
console.log(ans);  //it will returns with complete local memory
ans();  // it will priint friend which is returned by above line
