//undefined
let firstName;
console.log(firstName);
console.log(typeof firstName);

let lastName=null;
console.log(lastName);
console.log(typeof lastName);

let mynumber=233445566;
console.log(mynumber);
console.log(typeof mynumber);
console.log(mynumber.MAX_SAFE_INTEGER);

let myNumber=BigInt(2349);
console.log(myNumber);
console.log(typeof myNumber);

let number1=2349n;
console.log(number1, typeof number1);

let number2=2349;
let number3=2349n;
console.log(number1==number2);// true only checks value
console.log(number1===number2);// false checks value and datatype

let number4=2349;
let number5=2349n;
console.log(number4!=number5);//false checks only value
console.log(number4!==number5);// true checks value and datatype