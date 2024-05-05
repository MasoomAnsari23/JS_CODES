// checking either every element of this array is even or not
const arr1=[2,4,6,8,10];

const isEven=arr1.every((number)=>{
    return number%2===0;
});
console.log(isEven);  // PRINT TRUE because every element is even here