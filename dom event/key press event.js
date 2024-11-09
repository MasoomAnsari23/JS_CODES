//when we press any key here key will occour in console
const body=document.body;
body.addEventListener("keypress",(event)=>{
    console.log(event);
    console.log(event.key);
})