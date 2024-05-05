// to check either a single number is even or not
const number=[17,9,4,7,11,13];
const even=number.some((element)=>{
    return element%2===0;
});
console.log(even);