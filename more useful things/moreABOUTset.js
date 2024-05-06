//checking element either present or not
const number= new Set([1,2,3,4,5]);
console.log(number);
const trueFalse=number.has(3);
console.log(trueFalse); // return true
//also we can write as
// number.has(8);
if(number.has(8)){
    console.log(" 8 is present")
}
else{
    console.log("8 is not present")
}

//for of loop
for(let numberxx of number){
    console.log(numberxx);
}

//making set from array to take unique values
const myArray=[1,2,3,4,5,6,6,7,3,8,0,3];
console.log(myArray);
const setArray=new Set(myArray);
console.log(setArray); // ignores rpeated values/element


//finding length by using for loop
//console.log(setArray.length); //undefine
let length=0;
for(let xyz of setArray){
    length++;
}
console.log(length);