const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");
const heading8=document.querySelector(".heading8");

function changeText(element,text,color,time){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(element){
            element.textContent=text;
            element.style.color=color;
            resolve();
        }else{
            reject("element not found")
        }
    },time)
})
}

changeText(heading1,"pakija pari","blue",1000)
.then(()=>changeText(heading2,"mustari","purple",1000))
.then(()=>changeText(heading3,"kasab","red",1000))
.then(()=>changeText(heading4,"alkama","orange",1000))
.then(()=>changeText(heading5,"samiya","green",1000))
.then(()=>changeText(heading6,"aafrin","blue",1000))
.then(()=>changeText(heading7,"sufi","green",1000))
.then(()=>changeText(heading8,"sufiya","purple",1000))