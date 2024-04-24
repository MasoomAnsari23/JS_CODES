let FirstName="Masoom";
let age=20;

if(FirstName[0]=="M"&& age>=18){  // this is "AND": both must be correct;
console.log("name starts with M and you are adult");
}

if(FirstName[0]=="x" || age>=18){ //this is "OR": either any one of them or both of them must be true;
console.log("name starts with M and you are adult");
}