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

//reduce methhod:sum
const numss=[2,4,5,6,7];
const anns=numss.reduce((accumulator,currentValue)=>{
  return accumulator+currentValue;
});
console.log(anns);

//sum from some fix number which is already there fix+arr[]
const numms=[2,3,4,5,6];
const anss=numms.reduce((x,y)=>{
  return x+y;
},1)// 1+ar[];
console.log(anss);

//price by reduce
const usercart=[
{productID:1,productprice:200},
{productID:2,productprice:800},
{productID:3,productprice:400},
{productID:4,productprice:700}
]
const totalprice=usercart.reduce((x,y)=>{
return x+y.productprice;//x=total price; y=current price
},0);//0 is intial price
console.log(totalprice);

//sort method
//js thinks its string
const nos=[1,2,8,3,4,6];//its are getting sort by ascii values
nos.sort();
console.log(nos);

//for real sort
const noom=[200,3,5,7,23,56];
noom.sort((a,b)=>{
  return a-b;
});
console.log(noom);

//sorting price of avove reduce method
// const usercart=[
//   {productID:1,productprice:200},
//   {productID:2,productprice:800},
//   {productID:3,productprice:400},
//   {productID:4,productprice:700}
//   ]

usercart.sort((a,b)=>{
 return a.productprice-b.productprice;
})
console.log(usercart);
// sort method change original array
// you can also create new array to store sorted price using slice method

//find method
const myarray=["hello","hii","cat","human"];
function length3(string){
  return string.length==3;
}
const ansss=myarray.find(length3);
console.log(ansss);// it will find only first 3 letter and don't look further


// finding id=4
// const usercart=[
  //   {productID:1,productprice:200},
  //   {productID:2,productprice:800},
  //   {productID:3,productprice:400},
  //   {productID:4,productprice:700}
  //   ]
  
  const aann=usercart.find((string)=>{
    return string.productID==4;
  })
  console.log(aann);

  //every method
  const nuom=[2,4,6,8,10];
  const reesu=nuom.every((number)=>{
    return number%2==0;
  })
  console.log(reesu);

  //checking is very price is aove 100
  // const usercart=[
  //   {productID:1,productprice:200},
  //   {productID:2,productprice:800},
  //   {productID:3,productprice:400},
  //   {productID:4,productprice:700}
  //   ]
const above100=usercart.every((price)=>{
  return price.productprice>=100;
})
console.log(above100);

//below 1000
const below1000=usercart.every((price)=>{
  return price.productprice<=1000;
});
console.log(below1000);

//some method
//one true all true onr false all false(atleast one)
const nobr=[2,3,4,5,6,7,8,9];
const atleat1even=nobr.some((even)=>{
  return even%2===0;
});
console.log(atleat1even);

// const usercart=[
  //   {productID:1,productprice:200},
  //   {productID:2,productprice:800},
  //   {productID:3,productprice:400},
  //   {productID:4,productprice:700}
  //   ]
  const atleast1isabove500=usercart.some((price)=>{
    return price.productprice>=500;
  });
  console.log(atleast1isabove500);

  //fill method
  //making array of size 10 and -1 as element
  const newarr=new Array(10).fill(-1);
  console.log(newarr);

  //filling element in array starting index =2 end index =5 not includeed
  const myarr=[2,4,5,6,7,3,4,5,6,8];
  myarr.fill(0,3,8);// its modifiying or replacing
  //0 is no to be filled
  //3 is strating index
  //8 is ending index
  console.log(myarr);

  //splice method
  //delete and insert in between array
 const myyarrr=[2,3,4,5,6,7];
 const deletedelement=myyarrr.splice(2,3,"inserted",23,49);
 //2:starting index
//  3:delete count
//rest are inserted 
 console.log(myyarrr);
 console.log(deletedelement);