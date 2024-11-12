//changing textcontent and color and backgroundcolor

const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");

setTimeout(()=>{
    heading1.textContent="PAKIJA PARI";
    heading1.style.color="orange"
    setTimeout(()=>{
        heading2.textContent="MUSTARI PARWEEN"
        heading2.style.color="red"
        setTimeout(()=>{
            heading3.textContent="KASAB PARWEEN"
            heading3.style.color="blue"
            setTimeout(()=>{
                heading4.textContent="ALKAMA PARWEEN"
                heading4.style.color="green"
                setTimeout(()=>{
                    heading5.textContent="SAMIYA PARWEEN"
                    heading5.style.color="yellow"
                },6000)
            },5000)
        },4000)
    },3000)
},2000)