const btn= document.querySelector(".btn-headline");
btn.addEventListener("click",function(){//normal function is used
    console.log("you clicked me");
    console.log(this);//here this is button itself not window
})

//arrow function
btn.addEventListener("click", ()=>{
    console.log("arrow function clicked me");
    console.log(this);//here this is window not button itself
});

