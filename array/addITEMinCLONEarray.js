let arr1=[1,3,5,7];
let arr2=arr1;
console.log(arr1);
console.log(arr2);
arr2=arr1.slice(0).concat([9]);
console.log(arr1);
console.log(arr2);