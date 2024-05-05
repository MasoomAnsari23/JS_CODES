const arr1=["cool", "cat" , "gaza" , "genocide_joe", "hitenyahu"];
const result=arr1.find((string)=>{
    return string.length===3;
});  // this will only return 1st word whose length=3(cat)
console.log(result);

