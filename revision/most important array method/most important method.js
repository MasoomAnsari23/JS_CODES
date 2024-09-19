// forEach method
const numbers=[2,4,6,8,10];
function display(number, index){
  console.log(`number is ${number} and index is ${index}`);
  console.log(`number is ${number*2}`);
}
numbers.forEach(display);
const users=[
    {firstname:"masoom", age:22},
    {firstname:"sahid", age:24},
    {firstname:"sajjad", age:20},
    {firstname:"asif", age:17}
];

users.forEach(function(user){
    console.log(user.firstname);
    console.log(user.age);
});

//map method
//--it returns new array and does not modify original array
const numb=[2,3,4,5,6];
const sqr=function(numb){
  return numb*numb;
}
const sqrnumb=numb.map(sqr);
console.log(sqrnumb);

//example 2 of multiply by 3
const nuu=[2,3,4,5];
const multy3=function(nuu){
  return 3*nuu;
}
const mlt3=nuu.map(multy3);
  console.log(mlt3);

//example 3 :cube
const nnum=[2,3,4,5];
const cube=function(nnum){
  return nnum*nnum*nnum;
}
const resC=nnum.map(cube);
console.log(resC);

//example 4:multiply by 10
const nmm=[2,3,4,5,6,8];
const mlt10=function(numm){
  return 10*numm;
}
const resttt=nmm.map(mlt10);
console.log(resttt);

// example 5:divide by 2;
const nmx=[2,4,52,50,6,8];
const div1=function(nmx){
  return nmx/2;
}
const rdiv1=nmx.map(div1);
console.log(rdiv1);

// example 6:mult7
const numxx=[2,3,4,5];
const fnumxx=function(numxx){
  return numxx*7;
}
const rnumxx=numxx.map(fnumxx);
console.log(rnumxx);

//example 7:storing user first name
const unerx=[
  {name:"masoom", age:22},
  {name:"sajjad", age:20},
  {name:"sahid", age:24},
  {name:"asif", age:17}
]
const unf=function(unerx){
  return unerx.name;

}
const runf=unerx.map(unf);
console.log(runf);


//filter method
const nmmx=[2,3,4,5,6,7,8,9];
const isEven=function(nmmx){
  return nmmx%2===0;
}
const evennumber=nmmx.filter(isEven);
console.log(evennumber);

//example 2:odd
const no=[2,3,4,5,6,7,8,9];
const isodd=function(no){
  return no%2!=0;
}
const oddno=no.filter(isodd);
console.log(oddno);