//filtering even number  from array
const arr1=[2,3,5,8,1,9,4];

const isEven=function(number){
    return number%2===0;
}
const result=arr1.filter(isEven);
console.log(result);

//filtering odd number from array
const arr2=[1,3,2,4,5,6,8,10,11];

const isOdd=function(number){
    return number%2!==0;
}

const results=arr2.filter(isOdd);
console.log(results);