const arr1=[2,4,3,5,6,7,14];

//filtering even numbers
const isEven=arr1.filter((number)=>{
    return number%2===0;
});
console.log(isEven);

// filtering odd numbers
const isOdd=arr1.filter((number)=>{
    return number%2!==0;
});
console.log(isOdd);