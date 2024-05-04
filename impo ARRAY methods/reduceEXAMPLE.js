const arr1=[
    {productId:1, productName:"mobile" , price:25000},
    {productId:2, productName:"laptop", price:45000},
    {productId:3, productName: "tv", price:22000}
];

const totalAmount=arr1.reduce((totalPrice ,currentPrice)=>{
    return totalPrice + currentPrice.price; // here we have to verify about price by .price
},0); // 0 is initial price set here
console.log(totalAmount);