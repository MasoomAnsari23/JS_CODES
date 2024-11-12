//undersatanding callbacks
function myfunxn(){
    console.log("free");
}

function myfunxn2(){
    console.log("palastine");
}

myfunxn();
myfunxn2();

//method :2
function myfunx3(callback){
    console.log("free");
    callback();
}

function myfunxn4(){
    console.log("gaza");
}
myfunx3(myfunxn4);

//method :3
function myfunxn5(callbacks){
    console.log("freedom to ");
    callbacks();
}
myfunxn5(()=>{
    console.log("palastine");
});
