const arr1=[2,3,4,5,6,7,8,9];
 //forEach method
 function myfunc(number,index){
    console.log(`number is ${number}: index is ${index}`);
 }
 arr1.forEach(myfunc);

 //map method
const result=arr1.map((number)=>{
    return number*number;
});
console.log(result);

//filter method
const isEven=arr1.filter(function(number){
    return number%2===0;
})
console.log(isEven);

//reduce method
const sum=arr1.reduce(function(accumulator, currentvalue){
    return accumulator+currentvalue;
},10); //we can initialise some vale
console.log(sum);