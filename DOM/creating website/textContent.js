const mainHeading=document.getElementById("main-heading");
console.log(mainHeading.textContent); //here hello will also print and in website hello is hidden

mainHeading.textContent="This is something else";
console.log(mainHeading.textContent);  //now main heading changes from "manage your tasks hello" to "this is something else"