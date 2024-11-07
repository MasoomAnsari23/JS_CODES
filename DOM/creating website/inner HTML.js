//printing inner html 
const headline=document.querySelector(".headline");
console.log(headline.innerHTML);

//to chage inner html
headline.innerHTML="<h1>freedom to gaza</h1>";
console.log(headline.innerHTML);

//adding buttons
headline.innerHTML+="button class=\"btn\">learn more</button>";
console.log(headline.innerHTML);