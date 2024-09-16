//basics
function sing(){
    console.log("victory to palastine");
}
sing();

//adding 2 no
function sum(no1,no2){
 return no1+no2;
}
const result=sum(4,5);
console.log(result);

//even:true , odd:false
function isEven(no){
    if(no%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(4));
console.log(isEven(5));

//returning first index of string
function fst(first){
    return first[0];
}
console.log(fst("masoom"));
console.log(fst("ansari"));

//finding taget in array
function findTarget(array,target){
    for(let i=0; i<array.length; i++){
    if(array[i]===target){
        return i;
    }
   }
   return -1;
}
const myarray=[2,3,4,9];
const answer=findTarget(myarray,3);
console.log(answer);

//functiom expression
const shp=function (){
 console.log("freedom to palastine")
}
shp();

//expression of adding 2 number
const summ=function (no1,no2){
    return no1+no2;
}
console.log(summ(2,3));
console.log(summ(2,4));

//even or odd
const isseven=function (num){
    if(num%2===0){
        return true;
    }
    else {
        return false;
}
}
console.log(isseven(4));
console.log(isseven(3));

//arrow function
  const sang=()=>{
    console.log("freedom to palastine");
   }
  sang();

  //even odd
  const evvvn=(no)=>{
    if(no%2===0){
        return true;
    }
    else {
        return false;
    }
  }
  console.log(evvvn(3));
  console.log(evvvn(4));

//function inside function
  const functINside=()=>{ //main function
    const add=(no1,no2)=>{ //inside function
        console.log(no1+no2);
    }
    const heel=()=>{ //inside function
        console.log("freedom to gaza");
    }
    console.log("inside function")
    heel(); //calling inside function
    add(2,3); //calling inside function
  }
  functINside();  //calling main function

//lexical scope
  const myvar="hello1";//this will print as global scope in lexical scope
  const lex1=()=>{
    // const myvar="hello2";// this is lexical scope and if this is not present here then it will look in global scope
    const lex2=()=>{
        console.log("free gaza");
    }
    console.log("freedom to gaza");
   console.log(myvar);
   lex2();
 }
 lex1();

//block scope(let and const are block scope)
  {
    let nm="masoom";
    console.log(nm);// only define inside block
  }
  // console.log(nm);//error outside the block

//function scope(var is a function scope)
{
    var mn="masoom";
    console.log(mn);
}  
{
    console.log(mn);//can be accessed outside of block
}

//default parameter
const addtwo=function(a,b=0){
    return a+b;
}
console.log(addtwo(2,4));
console.log(addtwo(2));

//rest parameter
function myfunc(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c)//rest element will be in c as lement of array
}
myfunc(2,4,6,3,4,5);
myfunc(23,49,3,45,6,0,677);
//adding nos
function addall(...numbr){
 let tot=0;
 for(let num of numbr){
    tot=tot+num;
 }
 return tot;
}
console.log(addall(2,3,4,1,5));
console.log(addall(2349,2356));

//parameter destructuring
const person={
    fname:"masoom",
    Gender:"M"
}
function printdetails(obj){
    console.log(obj.fname);
    console.log(obj.Gender);
    console.log(obj.age)//undefine-no present in function
}
printdetails(person);

//callback funstion
 function myfun1(callback){
   console.log("hello gaza");
   console.log(callback);//print complete function 2 as it is.
   callback();//print freedom to palastine
}

function myfun2(){
    console.log("freedom to palastine");
}
myfun1(myfun2);

//function returing function
function myfuncc(){
    function hello(){
        return "hello gaza"
    }
    return hello;
}
const ans=myfuncc();
console.log(ans());