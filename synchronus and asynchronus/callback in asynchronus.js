//we have to change textcontent and also color after 1-2 sec like this
const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");

setTimeout(()=>{
    heading1.textContent="freedom"
    heading1.style.color="green";
},2000)

setTimeout(()=>{
    heading2.textContent="to gaza"
    heading2.style.color="yellow";
},4000)

//to change all it takes long code and we may have human error