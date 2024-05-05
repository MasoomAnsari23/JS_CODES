const product=[
    {id:1,price:1000},
    {id:2,price:2000},
    {id:3,price:5000},
    {id:4,price:3000},
    {id:5,price:4000}
]

const result=product.every((amount)=>{
    return amount.price<=5000;
});
console.log(result);