// making array of length 10 and filling it with -1
const myarray=new Array(10).fill(-1);
console.log(myarray);

//we have to fill 0 from index 2-5 
const arr2=[3,4,5,6,7,8,9,2];
arr2.fill(0,2,5); //original array will change
console.log(arr2);