// // selecting only button one
const btn=document.querySelector("#one");
btn.addEventListener("click",()=>{
    console.log("you clicked me!");
})

// //to addEventListner to all button
const allbuttons=document.querySelectorAll(".my-button button");
console.log(allbuttons);
//we need to apply loop its neccessary
for(let button of allbuttons){
    button.addEventListener("click",()=>{
        console.log("you clicked any one of three")
    })
}


//this in arrow function
for(let button of allbuttons){
    button.addEventListener("click",()=>{
        console.log(this);//here this will print window not button
    })
}


//this in normal function
for (let button of allbuttons){
    button.addEventListener("click",function(){
        console.log(this);//here this will print button itself not window
    })
}

//to print textConotent of buttons when clicked by for of loop
for(let button of allbuttons){
    button.addEventListener("click",function(){
        console.log(this.textContent);
    })
}

//to print textConotent of buttons when clicked by for loop
for(let i=0; i<allbuttons;i++){
    allbuttons[i].addEventListener("click",function(){
        console.log(this.textContent);
    })
}

////to print textConotent of buttons when clicked by for each loop
allbuttons.forEach(function(button){
    button.addEventListener("click",function(){
        console.log(this.textContent);
    });
})