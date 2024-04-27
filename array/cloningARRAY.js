//normal method to clone array
let arr1=[1,2,3,4,5];  //arr1 is array
arr2=arr1;
console.log(arr1===arr2);   //true
console.log(arr1);
console.log(arr2); 
console.log(Array.isArray(arr1));  //true
console.log(Array.isArray(arr2));  //true

//here arr3 and arr1 have same element but differnt arrays they are not same becase different array is being created by using let
let arr3=[1,2,3,4,5];
console.log(arr3);
console.log(Array.isArray(arr1));  //true
console.log(Array.isArray(arr3));  //true
console.log(arr1===arr3);  //false  


//slice method to clone array
let arr4=[2,3,4,5,6];
arr5=arr4.slice(0);
console.log(arr4);
console.log(Array.isArray(arr4));  //true
console.log(Array.isArray(arr5));  //true
console.log(arr5);
console.log(arr4===arr5);  //false

//concatination method to clone array
let arr6=[5,6,7,8,10];
arr7=[].concat(arr6);
console.log(arr6);
console.log(arr7);
console.log(Array.isArray(arr6)); //true
console.log(Array.isArray(arr7));  //true
console.log(arr6===arr7); //false

//spread operator method to clone array
let arr8=[2,4,6,8,10];
arr9=[...arr8];
console.log(arr8);
console.log(arr9);
console.log(Array.isArray(arr8)); //true
console.log(Array.isArray(arr9));  //true
console.log(arr8===arr9);  //false
