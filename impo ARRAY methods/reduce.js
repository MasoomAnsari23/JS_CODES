const arr1=[1,2,3,4,5];

const sum=arr1.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
});//we can also add intial value after end of curly braces

console.log(sum);