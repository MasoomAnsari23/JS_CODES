function addALL(...nos){
    console.log(nos);

let total=0;
for(let no of nos){
    total=total+no;
    }
return total;
}
let ans=addALL(2,3,4,5);
// sum(2,3,4,5,6,7,8,9,0);
console.log(ans);
