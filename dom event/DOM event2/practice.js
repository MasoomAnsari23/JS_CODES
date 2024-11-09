//changing color of button after click
const allbuttons=document.querySelectorAll(".my-button button");
console.log(allbuttons);
allbuttons.forEach(button=>{
    button.addEventListener("click",(event)=>{
        event.target.style.backgroundColor="yellow";
        event.target.style.color="green";
    })
})