// const firstbutton=document.querySelector("#one");
// firstbutton.addEventListener("click" , function(event){
//     console.log(event);//event object
// })
const allbuttons=document.querySelectorAll(".my-button button");
// console.log(allbuttons);
for(let button of allbuttons){
button.addEventListener("click",function(event){
    console.log(event.target);
    console.log(event.currentTarget);
})
}