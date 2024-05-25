// example 1
const link=document.querySelector("a");
console.log(link);

console.log(link.getAttribute("href")); // print value of href in anchor tag;

link.setAttribute("href","hommy"); //chnaging value

console.log(link.getAttribute("href"));//changed value


// example 2
const inputElement=document.querySelector("a");
console.log(inputElement);
console.log(inputElement.getAttribute("type"));
inputElement.setAttribute("type","free gaza");
console.log(inputElement.getAttribute("type"));
