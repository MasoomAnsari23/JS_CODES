const price=[
    {productId:1,productName:"p1",price:400},
    {productId:2,productName:"p2",price:700},
    {productId:3,productName:"p3",price:200},
    {productId:4,productName:"p4",price:50},
    {productId:5,productName:"p5",price:140},
    {productId:6,productName:"p6",price:1400}
]

//shorting from low to high
const lowToHigh=price.sort((a,b)=>{
    return a.price-b.price;
});
console.log(lowToHigh);


const amount=[
    {productId:1,productName:"p1",price:400},
    {productId:2,productName:"p2",price:700},
    {productId:3,productName:"p3",price:200},
    {productId:4,productName:"p4",price:50},
    {productId:5,productName:"p5",price:140},
    {productId:6,productName:"p6",price:1400}
]
//shorting from high to low
const highToLow=amount.sort((c,d)=>{
    return d.price-c.price;
});
console.log(highToLow);


//in alphabetical higer case have larger ascii value then lower case