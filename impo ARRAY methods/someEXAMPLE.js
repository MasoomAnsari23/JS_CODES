const ekart=[
    {productId:1, price: 2349},
    {productId:2, price: 6534},
    {productId:3, price: 2345},
    {productId:4, price: 20000},
    {productId:5, price:1000}
];

const result=ekart.some((amount)=>{
    return amount.price>=10000
});

console.log(result);