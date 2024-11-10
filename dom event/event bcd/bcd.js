//event bubbling:Event bubbling is a concept in JavaScript where an event triggered on a specific element (like a button click) propagates up through the parent elements, firing any attached event handlers along the way. It allows events to "bubble up" through the DOM hierarchy, from the target element to its ancestors.

const child=document.querySelector(".child");
const parent=document.querySelector(".parent");
const grandparent=document.querySelector(".grandparent");

child.addEventListener("click",()=>{
    console.log("you click child");
})

parent.addEventListener("click",()=>{
    console.log("you clicked parent");
})

grandparent.addEventListener("click",()=>{
    console.log("you clicked grandparent");
})

document.body.addEventListener("click",()=>{
    console.log("you clicked body");
})

//if we click child everythind will be clicked
//if we click parent everything will be clicked except child
//and so on