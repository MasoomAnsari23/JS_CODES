let rest=(a,b,c,d, ...e)=>{  // here rest of all element will be in 'e' as array
    console.log(a);   //2
    console.log(b);   //3
    console.log(c);   //4
    console.log(d);  //5
    console.log(e);  //[6,6,7,89,23,49]
}

rest(2,3,4,5,6,6,7,89,23,49);