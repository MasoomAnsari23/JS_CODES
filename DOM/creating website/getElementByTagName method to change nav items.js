//to change color background of nav items in website

const navIteams=document.getElementsByTagName("a");//a is anchor tag
for(let i=0; i<navIteams.length; i++){
    const navIteam=navIteams[i];
    navIteam.style.color="green";
    navIteam.style.backgroundColor="white";
    navIteam.style.fontWeight="bold";
}