const arr1=[1,3,5,7,9];
function myfunc(number,index){
    console.log(`index is ${index}: number is ${number}`);
}
arr1.forEach(myfunc);

//simple method 
arr1.forEach(function(number){
    console.log(`number is ${number}`);
});