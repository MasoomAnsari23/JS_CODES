let arr1=[1,3,5,7];
let arr2=arr1;
console.log(arr1);
console.log(arr2);

// adding by slice method
arr2=arr1.slice(0).concat([9]);
console.log(arr1);
console.log(arr2);

//adding by concat method
arr3=[].concat(arr1 , 13);
console.log(arr3);

//adding by spread method
arr4=[...arr1, 23];
console.log(arr4);