//also known as addEventListner method
const btn=document.querySelector(".btn-headline");
console.log(btn);
//using addEventListner method
function clickme(){
    console.log("you clicked me !!!");
}
btn.addEventListener("click",clickme)//click is event amd clickme is function

//we can define function within method
btn.addEventListener("click", function(){
    console.log("you clicked me!!!!");
})

//we can also use arrow function and that is best here
btn.addEventListener("click",()=>{
    console.log("you clicked me!!!!!");
})