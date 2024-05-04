//method:1
const numbers=[2,4,5,7,8,9];
const sqr=function(number){
    return number*number;
}
const sqrnos=numbers.map(sqr);
console.log(sqrnos);

// example:2
const arr1=[2,4,6,8];
const myfunc=function(number){
    return number*number;
}
const result1=arr1.map(myfunc);
console.log(result1);

//simple method
let arr2=[3,6,9];
 const result=arr2.map(function(number){
    return number*number;
});
console.log(result);