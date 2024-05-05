const number=[6,4,7,8,45,68,2,1,46];
number.sort(); //it changer original array
console.log(number);  //this is changed according to ascii code because JS takes this nos as string

number.sort((a,b)=>{
    return a-b;
});  //this is according to accendiing order
console.log(number);

number.sort((a,b)=>{
    return b-a;
});  // this is descending order
console.log(number);