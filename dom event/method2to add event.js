//selecting that button
const btn=document.querySelector(".btn-headline");
console.log(btn);// printing that selected button

//using property onclick and additond function and printing it
btn.onclick=function(){
    console.log('you clicked me !!');
}
//we dont use this method because we cant assign onclick method more then one time