//declaring string
let firstName="  masoom   ";
console.log(firstName);
//lenth of variable that we declare
console.log(firstName.length);

//finding last index of variable if length is unknown
console.log(firstName[firstName.length-1]);

//removing space--use--trim();
let newString=firstName.trim();
console.log(newString);
//for saving in same variable
firstName=firstName.trim();
console.log(firstName);

//to upper case // it will change all letter to upper case
firstName=firstName.toUpperCase();
console.log(firstName);

// to lower case// it will change all variable to lower case
firstName=firstName.toLowerCase();
console.log(firstName);

// slice(0,4)=it will keep words from 0 index to 3 and remove rest //to remove some thing
firstName=firstName.slice(0,4);
console.log(firstName);// maso and removes 'om'
firstName=firstName.slice(1); //removes only first word and print all
firstName=firstName.slice(0); //no change
console.log(firstName);